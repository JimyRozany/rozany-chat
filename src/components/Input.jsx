import { useState } from "react";
import { LuImagePlus } from "react-icons/lu";
import { useAuth } from "../contexts/AuthContext";
import { useChat } from "../contexts/ChatContext";
import {
  Timestamp,
  arrayUnion,
  doc,
  serverTimestamp,
  updateDoc,
} from "firebase/firestore";
import { db, storage } from "../firebase";
import { v4 as uuid } from "uuid";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";

const Input = () => {
  const [text, setText] = useState("");
  const [image, setImage] = useState(null);

  const currentUser = useAuth();
  const { data } = useChat();

  const handleSend = async () => {
    if (image) {
      //handle upload image
      const storageRef = ref(storage, uuid());
      const uploadTask = uploadBytesResumable(storageRef, image);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          // Observe state change events such as progress, pause, and resume
          // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
          switch (snapshot.state) {
            case "paused":
              console.log("Upload is paused");
              break;
            case "running":
              console.log("Upload is running");
              break;
          }
        },
        (error) => {
          // Handle unsuccessful uploads
          // setError(true);
        },
        () => {
          // Handle successful uploads on complete
          // For instance, get the download URL: https://firebasestorage.googleapis.com/...
          getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
            await updateDoc(doc(db, "chats", data.chatId), {
              messages: arrayUnion({
                id: uuid(),
                text,
                senderId: currentUser.uid,
                image: downloadURL,
                date: Timestamp.now(),
              }),
            });
          });
        }
      );
    } else {
      await updateDoc(doc(db, "chats", data.chatId), {
        messages: arrayUnion({
          id: uuid(),
          text,
          senderId: currentUser.uid,
          date: Timestamp.now(),
        }),
      });
    }
    await updateDoc(doc(db, "userChats", currentUser.uid), {
      [data.chatId + ".lastMessage"]: {
        text,
      },
      [data.chatId + ".date"]: serverTimestamp(),
    });
    await updateDoc(doc(db, "userChats", data.user.uid), {
      [data.chatId + ".lastMessage"]: {
        text,
      },
      [data.chatId + ".date"]: serverTimestamp(),
    });
    setText("");
    setImage(null);
  };
  return (
    <div className=" flex items-center justify-between w-full h-[66px] bg-[#fff] px-2">
      <input
        type="text"
        placeholder="type anything ..."
        className="w-[70%] h-[50px] ml-2 outline-none border-none text-xl text-main-dark font-medium"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      {/* image & file */}
      <div className=" flex items-center gap-2">
        <input
          type="file"
          className="hidden"
          id="image"
          onChange={(e) => setImage(e.target.files[0])}
        />
        <label htmlFor="image">
          <LuImagePlus className="text-xl text-sky-color hover:cursor-pointer" />
        </label>
        <button
          className="bg-sky-color  py-1 px-2 rounded text-[#fff] text-sm font-medium"
          onClick={handleSend}
        >
          Send
        </button>
      </div>
      {/* --------- image & file --------- */}
    </div>
  );
};

export default Input;
