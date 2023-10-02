// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import {getStorage} from "firebase/storage"
import { getDatabase} from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBmHA8LF-WrR5c1gAqONjrNOJoA5m6LNCE",
  authDomain: "astrotech2-2809a.firebaseapp.com",
  projectId: "astrotech2-2809a",
  storageBucket: "astrotech2-2809a.appspot.com",
  messagingSenderId: "830476925715",
  appId: "1:830476925715:web:663a58f0ea632d199ef8e6",
  measurementId: "G-75GZDR0LNV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// export const analytics = getAnalytics(app);
export const storage=getStorage(app)
export const database=getDatabase(app)