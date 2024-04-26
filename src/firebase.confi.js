// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBcYok4DSbKGDt-1TU429RrJ9950zgdGHI",
  authDomain: "astrovel-client-site.firebaseapp.com",
  projectId: "astrovel-client-site",
  storageBucket: "astrovel-client-site.appspot.com",
  messagingSenderId: "110932356462",
  appId: "1:110932356462:web:92eb437f3196071ad0a57f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);