// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAKd5KJB_6ZV-_VZxcOEDnWhOp_BOsinO0",
  authDomain: "rozany-chat.firebaseapp.com",
  projectId: "rozany-chat",
  storageBucket: "rozany-chat.appspot.com",
  messagingSenderId: "522755203846",
  appId: "1:522755203846:web:ec9e7316f7aab6821fb487",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
