// // Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getStorage } from 'firebase/storage';
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: process.env.FIREBASE_API_KEY,
//   appId: process.env.FIREBASE_APP_ID,
//   authDomain: process.env.FIREBASE_AUTH_DOMAIN,
//   databaseURL: process.env.FIREBASE_DATABASE_URL,
//   projectId: process.env.FIREBASE_PROJECT_ID,
//   storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
// };

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD0XjolsxDFkRWfwUNcBL0vIqfC5dI-EVY",
  authDomain: "local-pharma-70836.firebaseapp.com",
  projectId: "local-pharma-70836",
  storageBucket: "local-pharma-70836.appspot.com",
  messagingSenderId: "913127224920",
  appId: "1:913127224920:web:fcb2fd0e4260b4ef8efc2d",
  measurementId: "G-X7FN880FDJ"
};
// dfa97485dddd82f1d3d38bfb00673c7e8cda162d

// // Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const db = getStorage(app)

export { db, auth }