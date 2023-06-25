// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDzMm-z4XRyDz72ur_eNMjahSL33UXYtr4",
  authDomain: "react-portfolio-dashboar-507c9.firebaseapp.com",
  projectId: "react-portfolio-dashboar-507c9",
  storageBucket: "react-portfolio-dashboar-507c9.appspot.com",
  messagingSenderId: "731715857123",
  appId: "1:731715857123:web:d60b6208d5455067dd33d6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
export const storage = getStorage(app);

export const signInWithGoogle = () => signInWithPopup(auth, provider);
