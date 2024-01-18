import { BsFillPersonPlusFill } from "react-icons/bs";
import { BsCameraVideoFill } from "react-icons/bs";

import { IoIosMore } from "react-icons/io";
import { Input, Messages } from "./index";

const Chat = () => {
  return (
    <div className="border border-green-500 w-full">
      {/* chat info bar */}
      <div className="bg-main-light p-2 flex justify-between items-center">
        <span className="text-gray font-semibold">Ali</span>
        {/* icons */}
        <div className="flex justify-between items-center gap-3 text-gray">
          <BsCameraVideoFill className="hover:cursor-pointer  " />
          <BsFillPersonPlusFill className="hover:cursor-pointer " />
          <IoIosMore className="hover:cursor-pointer" />
        </div>
      </div>
      {/* --------- chat info bar --------- */}
      {/* messages area */}
      <Messages />
      {/* --------- messages area ---------  */}
      {/* send section  */}
      <Input />
      {/* -------- send section ---------- */}
    </div>
  );
};

export default Chat;
