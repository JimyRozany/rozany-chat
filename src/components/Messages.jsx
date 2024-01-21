import { useEffect, useState } from "react";
// components
import { Message } from "./index";
// firebase
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "../firebase";
// context
import { useChat } from "../contexts/ChatContext";

const Messages = () => {
  const { data } = useChat();
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const unSub = onSnapshot(doc(db, "chats", data.chatId), (doc) => {
      doc.exists() && setMessages(doc.data().messages);
    });

    return () => {
      unSub();
    };
  }, [data.chatId]);

  return (
    <div className="w-full h-[19rem] p-4 bg-light-color overflow-scroll">
      {messages?.map((message) => {
        return <Message key={message.id} message={message} />;
      })}
      {/* <Message />
      <Message />
      <Message /> */}
    </div>
  );
};

export default Messages;
