import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

const Login = () => {
  const [error, setError] = useState(false);
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;
    try {
      // register user
      const response = await signInWithEmailAndPassword(auth, email, password);

      // console.log("response is : ", response);

      navigate("/");
    } catch (error) {
      setError(true);
    }
  };

  return (
    <div className="w-72 bg-white rounded-md shadow-md p-3">
      {/* header card */}
      <div className="text-center">
        <h1 className="text-2xl font-semibold text-sky-color">Rozany Chat</h1>
        <h1 className="font-semibold text-main-dark">Login</h1>
      </div>
      {/* -----------  header card ----------- */}

      <form
        onSubmit={(e) => handleSubmit(e)}
        className="flex flex-col gap-2 items-center my-2"
      >
        <input
          type="text"
          placeholder="Email"
          className="border-b-2 border-light-color outline-none focus:border-sky-800 transition-all duration-300 ps-4 py-1 w-[80%]"
        />
        <input
          type="password"
          placeholder="password"
          className="border-b-2 border-light-color outline-none focus:border-sky-800 transition-all duration-300 ps-4 py-1 w-[80%]"
        />
        <button className="text-light-color text-lg font-semibold bg-sky-color border-none outline-none hover:cursor-pointer w-[80%] py-1 mt-2 rounded-sm">
          Login
        </button>
      </form>
      {/* handle errors */}
      {error && <span>something error</span>}
      {/* ------- handle errors ------- */}
      {/* go to login page  */}
      <div className="text-center">
        <span className="text-gray">you dont have an account? </span>
        <Link to="register" className="font-medium text-main-dark">
          Register
        </Link>
      </div>
    </div>
  );
};

export default Login;
