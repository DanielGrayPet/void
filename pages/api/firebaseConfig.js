// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAjE6u6tcQlYqva5eGV1DWxgTwGjZm3els",
  authDomain: "void-c93e1.firebaseapp.com",
  projectId: "void-c93e1",
  storageBucket: "void-c93e1.appspot.com",
  messagingSenderId: "438505968930",
  appId: "1:438505968930:web:66a9950d31001d34f0c17b",
  measurementId: "G-QHW96Z00G3",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);
