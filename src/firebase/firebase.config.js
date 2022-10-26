// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDeqXkNhsAxI3Ki5tjG3I5jvEo7aF7dUV0",
  authDomain: "online-learning-platform-ba3a7.firebaseapp.com",
  projectId: "online-learning-platform-ba3a7",
  storageBucket: "online-learning-platform-ba3a7.appspot.com",
  messagingSenderId: "628947376887",
  appId: "1:628947376887:web:ec42a7eb2626759dbd11f2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;