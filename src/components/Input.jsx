import { LuImagePlus } from "react-icons/lu";

const Input = () => {
  return (
    <div className=" flex items-center justify-between w-full h-[66px] bg-[#fff] px-2">
      <input
        type="text"
        placeholder="type anything ..."
        className="w-[70%] h-[50px] ml-2 outline-none border-none text-xl text-main-dark font-medium"
      />
      {/* image & file */}
      <div className=" flex items-center gap-2">
        <input type="file" className="hidden" id="image" />
        <label htmlFor="image">
          <LuImagePlus className="text-xl text-sky-color hover:cursor-pointer" />
        </label>
        <button className="bg-sky-color  py-1 px-2 rounded text-[#fff] text-sm font-medium">
          Send
        </button>
      </div>
      {/* --------- image & file --------- */}
    </div>
  );
};

export default Input;
