// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,

  authDomain: "discord-oauth-demo-416dc.firebaseapp.com",

  projectId: "discord-oauth-demo-416dc",

  storageBucket: "discord-oauth-demo-416dc.appspot.com",

  messagingSenderId: "743098017808",

  appId: import.meta.env.VITE_FIREBASE_APP_ID,

  measurementId: "G-4EJP76X06W",
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { app, db };
