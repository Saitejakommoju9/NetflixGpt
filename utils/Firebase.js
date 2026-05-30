// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDFvjbADdRtSZiJNjICrxerMkqr8ZRpZLw",
  authDomain: "netflixgpt-cfa8d.firebaseapp.com",
  projectId: "netflixgpt-cfa8d",
  storageBucket: "netflixgpt-cfa8d.firebasestorage.app",
  messagingSenderId: "537066341681",
  appId: "1:537066341681:web:34b183b75f567a95a4dc10",
  measurementId: "G-GQM8G3HXDX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();