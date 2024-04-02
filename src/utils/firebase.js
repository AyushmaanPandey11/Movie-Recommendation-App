// Import the functions you need from the SDKs you need
import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBFvW2c2rP-xgae0d0fhsPCAqkk6wvZGww",
  authDomain: "netflix-gpt-1b27f.firebaseapp.com",
  projectId: "netflix-gpt-1b27f",
  storageBucket: "netflix-gpt-1b27f.appspot.com",
  messagingSenderId: "1077182557635",
  appId: "1:1077182557635:web:85b91b194c3b8dd6942176",
  measurementId: "G-2MX057CE6Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Implementing firebase authentication
export const auth = getAuth(); 