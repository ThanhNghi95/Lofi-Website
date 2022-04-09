// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"


const firebaseConfig = {
  apiKey: "AIzaSyDSqlr76Ca3jRLfg1hfB-tiyIZrfRrSMvs",
  authDomain: "chilling-website.firebaseapp.com",
  projectId: "chilling-website",
  storageBucket: "chilling-website.appspot.com",
  messagingSenderId: "607802079514",
  appId: "1:607802079514:web:22c99ca197341ec78fd4a3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)
export const provider = new GoogleAuthProvider()

