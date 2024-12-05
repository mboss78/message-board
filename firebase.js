// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDQxF40vsAvNvGe61MizyX7-WiSyowyvhc",
  authDomain: "messageboard-488d5.firebaseapp.com",
  projectId: "messageboard-488d5",
  storageBucket: "messageboard-488d5.firebasestorage.app",
  messagingSenderId: "947753454288",
  appId: "1:947753454288:web:939bceaf63989e1ba82cd5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);