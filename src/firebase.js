import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyA1PkmPDMPZOEjDyUKaj0VUlyRsOMjmxIY",
  authDomain: "sgi-hackathon-2026.firebaseapp.com",
  projectId: "sgi-hackathon-2026",
  storageBucket: "sgi-hackathon-2026.firebasestorage.app",
  messagingSenderId: "1019160766481",
  appId: "1:1019160766481:web:84c1e4640ca5cfbbb3a9b0",
  measurementId: "G-K3624WVNSZ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
export const db = getFirestore(app);
