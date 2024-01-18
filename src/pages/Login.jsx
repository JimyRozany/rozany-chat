import React from "react";

const Login = () => {
  return (
    <div className="w-72 bg-white rounded-md shadow-md p-3">
      {/* header card */}
      <div className="text-center">
        <h1 className="text-2xl font-semibold text-sky-900">Rozany Chat</h1>
        <h1 className="font-semibold text-sky-700">Login</h1>
      </div>
      {/* -----------  header card ----------- */}

      <form className="flex flex-col gap-2 items-center my-2">
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
        <button className="text-white text-lg font-semibold bg-[#7b96ec] border-none outline-none hover:cursor-pointer w-[80%] py-1 mt-2 rounded-sm">
          Login
        </button>
      </form>

      {/* go to login page  */}
      <div className="text-center">
        <span className="text-gray-400">you dont have an account? </span>
        <a href="#">Register</a>
      </div>
    </div>
  );
};

export default Login;
