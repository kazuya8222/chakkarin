// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCbgNpRAmmVfliYjcYupXa2KUtIEoivfPQ",
  authDomain: "chakkarin-95660.firebaseapp.com",
  projectId: "chakkarin-95660",
  storageBucket: "chakkarin-95660.firebasestorage.app",
  messagingSenderId: "1007697195840",
  appId: "1:1007697195840:web:491c0896ca1ae7ab05c0a5",
  measurementId: "G-J84M22J9KS"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);