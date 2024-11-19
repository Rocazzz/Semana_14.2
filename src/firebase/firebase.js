// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBJYAHeG39qjKg29A16f2DBnTBHSNWT1sU",
  authDomain: "miprimerfirebase-3b4df.firebaseapp.com",
  projectId: "miprimerfirebase-3b4df",
  storageBucket: "miprimerfirebase-3b4df.firebasestorage.app",
  messagingSenderId: "312586661509",
  appId: "1:312586661509:web:208e10e22d3612133043ec"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export { auth };
