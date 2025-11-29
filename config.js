// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyABPt7F1xZgiliy4aYL0QmN1TcR6NMPgBU",
  authDomain: "kautilyapro1st-37720.firebaseapp.com",
  databaseURL: "https://kautilyapro1st-37720-default-rtdb.firebaseio.com",
  projectId: "kautilyapro1st-37720",
  storageBucket: "kautilyapro1st-37720.firebasestorage.app",
  messagingSenderId: "195587023092",
  appId: "1:195587023092:web:9fbe54170e400f227cfea1",
  measurementId: "G-QS6TXQJT6L"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);