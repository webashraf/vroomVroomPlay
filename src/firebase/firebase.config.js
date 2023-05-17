// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

console.log(".ENV FILE",import.meta.env.VITE_APIKEY);

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAh7MOBUeGmht3YtmgicCv6uCsFm7kDSfE",
  authDomain: "vroomvroomplay.firebaseapp.com",
  projectId: "vroomvroomplay",
  storageBucket: "vroomvroomplay.appspot.com",
  messagingSenderId: "847343978288",
  appId: "1:847343978288:web:335b7b0118fa352e456af5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;