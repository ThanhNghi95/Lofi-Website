// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider, signInWithPopup} from "firebase/auth"

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
export const auth = getAuth(app)
const provider = new GoogleAuthProvider()
export const signInWithGoogle = () =>{
  signInWithPopup(auth,provider).then((result)=>{
    const name = result.user.displayName
    const email = result.user.email
    const photoURL = result.user.photoURL

    localStorage.setItem("name",name)
    localStorage.setItem("name",email)
    localStorage.setItem("name",photoURL)
  }).catch((error)=>{
    console.log(error)
  })
}