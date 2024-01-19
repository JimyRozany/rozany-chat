import { useState } from "react";
// icons
import { LuImagePlus } from "react-icons/lu";
// firebase imports
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, storage, db } from "../firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const [error, setError] = useState(false);
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const imageAvatar = e.target[3].files[0];

    try {
      // register user
      const response = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      //handle upload image
      const storageRef = ref(storage, displayName);
      const uploadTask = uploadBytesResumable(storageRef, imageAvatar);

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
          setError(true);
        },
        () => {
          // Handle successful uploads on complete
          // For instance, get the download URL: https://firebasestorage.googleapis.com/...
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            console.log("File available at", downloadURL);
            // after upload image update user info (upload image to firebase storage)
            // set name and image url
            updateProfile(response.user, {
              displayName: displayName,
              photoURL: downloadURL,
            });

            // create user in database table
            setDoc(doc(db, "users", response.user.uid), {
              uid: response.user.uid,
              displayName: displayName,
              email: email,
              photoURL: downloadURL,
            });
            // redirect to login page
            navigate("/login");
          });
        }
      );
    } catch (error) {
      setError(true);
    }
  };

  return (
    <div className="w-72 bg-white rounded-md shadow-lg p-3">
      {/* header card */}
      <div className="text-center">
        <h1 className="text-2xl font-semibold text-sky-color">Rozany Chat</h1>
        <h1 className="font-semibold text-main-dark">Register</h1>
      </div>
      {/* -----------  header card ----------- */}

      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
        className="flex flex-col gap-2 items-center my-2"
      >
        <input
          type="text"
          placeholder="Display name"
          className="border-b-2 border-light-color outline-none focus:border-sky-800 transition-all duration-300 ps-4 py-1 w-[80%]"
        />
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
        {/* choose image */}
        <input type="file" className="hidden " id="image-avatar" />
        <label
          htmlFor="image-avatar"
          className="flex self-start items-end ms-7 mb-2 "
        >
          <LuImagePlus className="text-3xl mr-2 text-[#7b96ec] hover:cursor-pointer " />
          <span className="text-gray-400 text-sky-color text-md">
            Add an avatar
          </span>
        </label>
        {/* ---------- choose image -------- */}
        <button className="text-light-color text-lg font-semibold bg-sky-color border-none outline-none hover:cursor-pointer w-[80%] py-1 rounded-sm">
          Sign up
        </button>
      </form>
      {/* handle errors */}
      {error && <span className="text-[#faa]">something error !!</span>}
      {/* ------- handle errors ------- */}

      {/* go to login page  */}
      <div className="text-center">
        <span className="text-gray">i have an account! </span>
        <Link to="login" className="text-main-dark font-medium">
          Login
        </Link>
      </div>
    </div>
  );
};

export default Register;
