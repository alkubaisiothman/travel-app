// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBqfsfRsM1dscBvtnXpLmcDXSOuWhBFcsw",
  authDomain: "travel-app-19bb1.firebaseapp.com",
  projectId: "travel-app-19bb1",
  storageBucket: "travel-app-19bb1.firebasestorage.app",
  messagingSenderId: "576688728841",
  appId: "1:576688728841:web:8e9ab2900475e75a4541d8",
  measurementId: "G-MFPQWHBF0W"
};

// Initialize Firebase
const app = initializeApp(FirebaseConfig);
const analytics = getAnalytics(app);