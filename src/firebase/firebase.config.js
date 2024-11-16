// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCz6pU0Th61OHFTLyufZ55uwojRXtGwqvY",
  authDomain: "tritiyo-alo.firebaseapp.com",
  projectId: "tritiyo-alo",
  storageBucket: "tritiyo-alo.firebasestorage.app",
  messagingSenderId: "672106906734",
  appId: "1:672106906734:web:37499d8a5951c6dfc8127f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
