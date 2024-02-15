// firebaseConfig.js
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"
import { getAnalytics } from 'firebase/analytics';

const firebaseConfig = {
  apiKey: "AIzaSyDmSqczM7v-e5Ta6Qu_Nm9FW6QSnO_1udo",
  authDomain: "eduspot0.firebaseapp.com",
  projectId: "eduspot0",
  storageBucket: "eduspot0.appspot.com",
  messagingSenderId: "1008579376858",
  appId: "1:1008579376858:web:cf9aa3c976af59ce6e97e3",
  measurementId: "G-07MVF58QES"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);

export {app, analytics, auth, db};
