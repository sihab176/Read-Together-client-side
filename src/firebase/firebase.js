// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDNoLXuVEvBid-IQ9-8zf4eLniDebh0iJ0",
  authDomain: "read-together-a553b.firebaseapp.com",
  projectId: "read-together-a553b",
  storageBucket: "read-together-a553b.firebasestorage.app",
  messagingSenderId: "134916054487",
  appId: "1:134916054487:web:216db694200ffc1c343f92"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app)