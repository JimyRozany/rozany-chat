import { LuImagePlus } from "react-icons/lu";

const Register = () => {
  return (
    <div className="w-72 bg-white rounded-md shadow-lg p-3">
      {/* header card */}
      <div className="text-center">
        <h1 className="text-2xl font-semibold text-sky-900">Rozany Chat</h1>
        <h1 className="font-semibold text-sky-700">Register</h1>
      </div>
      {/* -----------  header card ----------- */}

      <form className="flex flex-col gap-2 items-center my-2">
        <input
          type="text"
          placeholder="Display name"
          className="border-b-2 outline-none focus:border-sky-800 transition-all duration-300 ps-4 py-1 w-[80%]"
        />
        <input
          type="text"
          placeholder="Email"
          className="border-b-2 outline-none focus:border-sky-800 transition-all duration-300 ps-4 py-1 w-[80%]"
        />
        <input
          type="text"
          placeholder="password"
          className="border-b-2 outline-none focus:border-sky-800 transition-all duration-300 ps-4 py-1 w-[80%]"
        />
        {/* choose image */}
        <input type="file" className="hidden " id="image-avatar" />
        <label
          htmlFor="image-avatar"
          className="flex self-start items-end ms-7 mb-2 "
        >
          <LuImagePlus className="text-3xl mr-2 text-[#7b96ec] hover:cursor-pointer " />
          <span className="text-gray-400">Add an avatar</span>
        </label>
        {/* ---------- choose image -------- */}
        <button className="text-white text-lg font-semibold bg-[#7b96ec] border-none outline-none hover:cursor-pointer w-[80%] py-1 rounded-sm">
          Sign up
        </button>
      </form>

      {/* go to login page  */}
      <div className="text-center">
        <span className="text-gray-400">i have an account! </span>
        <a href="#">Login</a>
      </div>
    </div>
  );
};

export default Register;
