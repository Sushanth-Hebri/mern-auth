// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-auth-7a49f.firebaseapp.com",
  projectId: "mern-auth-7a49f",
  storageBucket: "mern-auth-7a49f.appspot.com",
  messagingSenderId: "460914779304",
  appId: "1:460914779304:web:8a0dea8094d8e8970a8e9d"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);