// firebaseConfig.js
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"
import { getAnalytics } from 'firebase/analytics';

const firebaseConfig = {
  apiKey: "AIzaSyDC0LfB11OdFchb7k9iUq0f-V_fvTnU5Tk",
  authDomain: "dosimpapp.firebaseapp.com",
  projectId: "dosimpapp",
  storageBucket: "dosimpapp.appspot.com",
  messagingSenderId: "1022505073257",
  appId: "1:1022505073257:web:20e308229b6625f9df00f8",
  measurementId: "G-P7730TT08B"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);

export {app, analytics, auth, db};
