import { useState } from "react";
// firebase imports
import { useAuth } from "../contexts/AuthContext";
import {
  doc,
  collection,
  getDocs,
  query,
  setDoc,
  where,
  updateDoc,
  serverTimestamp,
  getDoc,
} from "firebase/firestore";
import { db } from "../firebase";

const Search = () => {
  const [userName, setUserName] = useState("");
  const [error, setError] = useState(false);
  const [user, setUser] = useState(null);
  const currentUser = useAuth();
  // handlers

  const handleSearch = async (e) => {
    e.preventDefault();
    console.log("searching ........ ");
    const q = query(
      collection(db, "users"),
      where("displayName", "==", userName)
    );

    try {
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        setUser(doc.data());
      });
    } catch (error) {
      console.log(error);
      setError(true);
    }
  };

  const handleSelect = async () => {
    // Check whether the conversation exists in the chat group or not
    const combiendId =
      currentUser.uid > user.uid
        ? currentUser.uid + user.uid
        : user.uid + currentUser.uid;
    try {
      const response = await getDoc(doc(db, "chats", combiendId));

      if (!response.exists()) {
        // create chat in chats collection
        await setDoc(doc(db, "chats", combiendId), { messages: [] });

        // create user chat
        await updateDoc(doc(db, "userChats", currentUser.uid), {
          [combiendId + ".userInfo"]: {
            uid: user.uid,
            displayName: user.displayName,
            photoURL: user.photoURL,
          },
          [combiendId + ".date"]: serverTimestamp(),
        });
        await updateDoc(doc(db, "userChats", user.uid), {
          [combiendId + ".userInfo"]: {
            uid: currentUser.uid,
            displayName: currentUser.displayName,
            photoURL: currentUser.photoURL,
          },
          [combiendId + ".date"]: serverTimestamp(),
        });
      }
    } catch (error) {
      setError(true);
    }
    setUser(null)
    setUserName("")
    
  };

  return (
    <div className="border-b border-gray p-2">
      <form onSubmit={(e) => handleSearch(e)}>
        <input
          type="text"
          placeholder="Find a user"
          className="bg-main-light border-none outline-none  text-light-color font-medium"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
      </form>
      {/* handle errors */}
      {error && <span>User not found</span>}
      {/* -------- handle errors -------- */}
      {/* user Card */}
      {user && (
        <div
          className="flex items-center gap-2 mt-2 hover:bg-main-dark hover:cursor-pointer px-1 py-2 rounded"
          onClick={handleSelect}
        >
          <img
            src={user.photoURL}
            alt=""
            className="w-10 h-10 rounded-full object-cover"
          />
          <span className="text-light-color font-medium">
            {user.displayName}
          </span>
        </div>
      )}
      {/* --------- user Card -------- */}
    </div>
  );
};

export default Search;
