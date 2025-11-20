// Firebase initialization module
// Conditionally initializes Firebase app and analytics based on environment

import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";

import firebaseConfig from "./config.js";

let app = null;
let analytics = null;

// Only initialize Firebase on the production domain or when explicitly enabled
const isProductionDomain = window.location.hostname === "bluehouse.is";
const shouldInitializeFirebase =
  isProductionDomain || import.meta.env.VITE_ENABLE_FIREBASE === "true";

if (shouldInitializeFirebase) {
  try {
    app = initializeApp(firebaseConfig);
    analytics = getAnalytics(app);
  } catch (error) {
    console.error("Firebase initialization failed:", error);
  }
} else {
  console.log(`Firebase initialization skipped (domain: ${window.location.hostname})`);
}

export { app, analytics };
