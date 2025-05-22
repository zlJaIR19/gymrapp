// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-analytics.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB8KMMz0ZJfjvmrLnOte7H-HxDedxSWKrQ",
  authDomain: "gymrapp-d5b6c.firebaseapp.com",
  projectId: "gymrapp-d5b6c",
  storageBucket: "gymrapp-d5b6c.firebasestorage.app",
  messagingSenderId: "287837807878",
  appId: "1:287837807878:web:a37647c17ae4acf364ea87",
  measurementId: "G-VENQ3268YP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export { app, analytics, db, firebaseConfig };