// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC8SDKAy_jOzpYGSiHcKkl7Z2xxeQEpd0g",
  authDomain: "auth-project-7e370.firebaseapp.com",
  projectId: "auth-project-7e370",
  storageBucket: "auth-project-7e370.appspot.com",
  messagingSenderId: "556440908653",
  appId: "1:556440908653:web:36894bb1ac6c4e5d99a064"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
export {db}