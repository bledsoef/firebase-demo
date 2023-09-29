// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCpTo1O8JBB8r9iTlRK6D32pBwtTOkwzrE",
  authDomain: "fir-demo-49a63.firebaseapp.com",
  projectId: "fir-demo-49a63",
  storageBucket: "fir-demo-49a63.appspot.com",
  messagingSenderId: "1091086039878",
  appId: "1:1091086039878:web:650c99c05ef4a992f2c347",
  measurementId: "G-5QC03FHBSJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

