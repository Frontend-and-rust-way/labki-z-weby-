import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAJ14NP277YGwtGelRMhaXghZYvVKrP9EY",
  authDomain: "laba-web-4.firebaseapp.com",
  projectId: "laba-web-4",
  storageBucket: "laba-web-4.appspot.com",
  messagingSenderId: "857319688735",
  appId: "1:857319688735:web:469db4ba463664157d632a",
  measurementId: "G-VQFL9FHCDV"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
  
export { auth, db };
