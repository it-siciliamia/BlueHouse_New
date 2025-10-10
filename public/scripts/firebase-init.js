// Firebase configuration and initialization
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.1.3/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.1.3/firebase-analytics.js";

const firebaseConfig = {
  apiKey: "AIzaSyCUHODQdM_bHGlEFtmbttq3O1xIB2rRz5E",
  authDomain: "bluehouse-d9cc4.firebaseapp.com",
  projectId: "bluehouse-d9cc4",
  storageBucket: "bluehouse-d9cc4.appspot.com",
  messagingSenderId: "459719626781",
  appId: "1:459719626781:web:6c32e548b509e5de4c36f4",
  measurementId: "G-WYRZ6Q7MDE",
};

const app = initializeApp(firebaseConfig);
getAnalytics(app);
