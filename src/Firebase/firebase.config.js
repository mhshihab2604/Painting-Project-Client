// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBg1ivlnc500-GhDgF6WKAarZhIXa-_j5I",
  authDomain: "assignment-10-2556a.firebaseapp.com",
  projectId: "assignment-10-2556a",
  storageBucket: "assignment-10-2556a.appspot.com",
  messagingSenderId: "102660697220",
  appId: "1:102660697220:web:08a5e14f83b0c301d566d1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;