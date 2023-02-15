// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDrjhfwaj5CKa0yqOnuSIkjdWaEeFJrOTQ",
  authDomain: "customer2-a88d3.firebaseapp.com",
  projectId: "customer2-a88d3",
  storageBucket: "customer2-a88d3.appspot.com",
  messagingSenderId: "83357217950",
  appId: "1:83357217950:web:e92249862dc46534a1f78f",
  measurementId: "G-DK2LHFB0DR",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
