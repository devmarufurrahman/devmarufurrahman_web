// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyB7NGSR726D8Ec4hFLNJ2UICiXHErw1_0k",
  authDomain: "portfolio-33dec.firebaseapp.com",
  projectId: "portfolio-33dec",
  storageBucket: "portfolio-33dec.firebasestorage.app",
  messagingSenderId: "718521015552",
  appId: "1:718521015552:web:67226ee737473bde2ee7e5",
  measurementId: "G-TBHYFJC40C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const initAnalytics = async () => {
  if (typeof window !== "undefined") {
    const supported = await isSupported();
    if (supported) {
      return getAnalytics(app);
    }
  }
  return null;
};
export const db = getFirestore(app);