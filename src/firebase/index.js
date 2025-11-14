// Firebase initialization module
// Conditionally initializes Firebase app and analytics based on environment

import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";

import firebaseConfig from "./config.js";

let app = null;
let analytics = null;

// Only initialize in production or when explicitly enabled
// This prevents unnecessary Firebase initialization during local development
if (import.meta.env.MODE === "production" || import.meta.env.VITE_ENABLE_FIREBASE === "true") {
  try {
    app = initializeApp(firebaseConfig);
    analytics = getAnalytics(app);
  } catch (error) {
    console.warn("Firebase initialization failed:", error.message);
  }
} else {
  console.log("Firebase initialization skipped in development mode");
}

export { app, analytics };
