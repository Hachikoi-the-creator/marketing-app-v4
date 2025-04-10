// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
import {
  getSecret,
  API_KEY,
  AUTH_DOMAIN,
  PROJECT_ID,
  STORAGE_BUCKET,
  MESSAGING_SENDER_ID,
  APP_ID,
  MEASUREMENT_ID,
  DATABASE_URL,
} from "astro:env/server";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: getSecret(API_KEY),
  authDomain: getSecret(AUTH_DOMAIN),
  projectId: getSecret(PROJECT_ID),
  storageBucket: getSecret(STORAGE_BUCKET),
  messagingSenderId: getSecret(MESSAGING_SENDER_ID),
  appId: getSecret(APP_ID),
  measurementId: getSecret(MEASUREMENT_ID),
  databaseURL: getSecret(DATABASE_URL),
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const database = getDatabase(app);
// export const analytics = getAnalytics(app);
