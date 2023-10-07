// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAL-70kjrWaWUYw1AI_jYdWVEf-IjH3CYE",
  authDomain: "easy-english-auth.firebaseapp.com",
  projectId: "easy-english-auth",
  databaseURL:
    "https://easy-english-auth-default-rtdb.europe-west1.firebasedatabase.app",
  storageBucket: "easy-english-auth.appspot.com",
  messagingSenderId: "508148516932",
  appId: "1:508148516932:web:deac9dfc205bcafbc99411",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const database = getDatabase(app);

export { auth };
export { database };
