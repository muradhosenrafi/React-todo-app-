// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";



const firebaseConfig = {
  apiKey: "AIzaSyDXRkA863x-HUKrdBhTq3woFvxHU2G5Qyc",
  authDomain: "my-farst-app-220e4.firebaseapp.com",
  projectId: "my-farst-app-220e4",
  storageBucket: "my-farst-app-220e4.firebasestorage.app",
  messagingSenderId: "896590910210",
  appId: "1:896590910210:web:3667f8f8e37d8b104a281b",
  measurementId: "G-73FCHDMEZ0"
};



const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);