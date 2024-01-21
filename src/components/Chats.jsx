import { doc, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../firebase";
import { useAuth } from "../contexts/AuthContext";
import { useChat } from "../contexts/ChatContext";

const Chats = () => {
  const currentUser = useAuth();
  const [chats, setChats] = useState([]);
  const { data, dispatch } = useChat();
  useEffect(() => {
    const getChats = () => {
      const unsub = onSnapshot(doc(db, "userChats", currentUser.uid), (doc) => {
        setChats(doc.data());
      });

      // cleanUp
      return () => {
        unsub();
      };
    };

    currentUser.uid && getChats();
  }, [currentUser.uid]);

  const handleSelect = (u) => {
    dispatch({ type: "CHANGE_USER", payload: u });
    // console.log("data is " ,chats);
  };
  return (
    <div>
      {Object.entries(chats)?.sort((a,b)=>b[1].date - a[1].date).map((chat) => {
        return (
          <div
            key={chat[0]}
            className="flex items-center gap-2 mt-2 hover:bg-main-dark hover:cursor-pointer p-2 rounded"
            onClick={() => handleSelect(chat[1].userInfo)}
          >
            <img
              src={chat[1].userInfo.photoURL}
              alt=""
              className="w-10 h-10 rounded-full object-cover"
            />
            {/* user info */}
            <div className="">
              <span className="text-light-color font-semibold ">
                {chat[1].userInfo.displayName}
              </span>
              <p className="text-sm text-gray ">{chat[1].lastMessage?.text}</p>
            </div>
            {/* ------- user info ------- */}
          </div>
        );
      })}
      {/* user Card */}

      {/* --------- user Card -------- */}
    </div>
  );
};

export default Chats;
