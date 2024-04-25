// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC3mlZMBlf5qG8craONlMbiSjJmwLhobB0",
  authDomain: "fir-secend-try.firebaseapp.com",
  projectId: "fir-secend-try",
  storageBucket: "fir-secend-try.appspot.com",
  messagingSenderId: "344156963591",
  appId: "1:344156963591:web:13b7333a499a79b82cbba2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);