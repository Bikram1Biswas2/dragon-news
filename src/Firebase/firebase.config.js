// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDnHwxqay62f0BdYZpE-wr2FYbFW4Pn3f8",
  authDomain: "react-auth-dragon-news-5a22f.firebaseapp.com",
  projectId: "react-auth-dragon-news-5a22f",
  storageBucket: "react-auth-dragon-news-5a22f.firebasestorage.app",
  messagingSenderId: "999663138264",
  appId: "1:999663138264:web:1a4491253a82107b6d2ead"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app