// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: "AIzaSyAJ14NP277YGwtGelRMhaXghZYvVKrP9EY",
  authDomain: "laba-web-4.firebaseapp.com",
  projectId: "laba-web-4",
  // storageBucket: "laba-web-4.firebasestorage.app",
  storageBucket: "laba-web-4.appspot.com",  
  messagingSenderId: "857319688735",
  appId: "1:857319688735:web:469db4ba463664157d632a",
  measurementId: "G-VQFL9FHCDV"
};


export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);