// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import {getStorage} from "firebase/storage"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBWtH2RKcHU2UsB3vz-0fchFU4aOcTBgdc",
  authDomain: "astrotech-58933.firebaseapp.com",
  projectId: "astrotech-58933",
  storageBucket: "astrotech-58933.appspot.com",
  messagingSenderId: "297188448948",
  appId: "1:297188448948:web:23a3325e06d3215a6ad5e1",
  measurementId: "G-P7KSH2KQN3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// export const analytics = getAnalytics(app);
export const storage=getStorage(app)