// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBJXIeXauC4HYklN2G9tu3Q0Lw3h-o3vak",
    authDomain: "otp2-892e3.firebaseapp.com",
    projectId: "otp2-892e3",
    storageBucket: "otp2-892e3.appspot.com",
    messagingSenderId: "406555199581",
    appId: "1:406555199581:web:e9ac0e4c0debc3c8a0e5b4",
    measurementId: "G-H0NXVC819E"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);