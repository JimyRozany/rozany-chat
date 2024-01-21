import { useEffect, useRef } from "react";
import { useAuth } from "../contexts/AuthContext";
import { useChat } from "../contexts/ChatContext";

const Message = ({ message }) => {
  const currentUser = useAuth();
  const { data } = useChat();
  const ref = useRef();

  useEffect(() => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  }, [message]);

  return (
    <div
      ref={ref}
      className="flex gap-2"
      dir={message.senderId === currentUser.uid ? "rtl" : "ltr"}
    >
      {/* message info */}
      <div className="">
        <img
          src={
            message.senderId === currentUser.uid
              ? currentUser.photoURL
              : data.user.photoURL
          }
          alt=""
          className="w-8 h-8 object-cover rounded-full"
        />
        <p className="text-[#afafaf] w-max ">just now</p>
      </div>
      {/* ------- message info ------- */}
      {/* message content */}
      <div className="">
        {message.text && (
          <p
            className={`${
              message.senderId === currentUser.uid
                ? "bg-sky-color text-[#fff]"
                : "text-[#000] bg-[#fff]"
            }  py-1 px-2 max-w-max rounded-se-md rounded-b-md  font-medium`}
          >
            {message.text}
          </p>
        )}
        <img
          src={message.image}
          alt=""
          className="max-w-[80%] my-2 rounded-md object-cover"
        />
      </div>
      {/* ------- message content ------- */}
    </div>
  );
};

export default Message;
