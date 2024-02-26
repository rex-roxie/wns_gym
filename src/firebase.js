// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD8tgKS2Q7VWBeESzKTj29TUQnYep1ebE8",
  authDomain: "wns-gym.firebaseapp.com",
  projectId: "wns-gym",
  storageBucket: "wns-gym.appspot.com",
  messagingSenderId: "521794572921",
  appId: "1:521794572921:web:335808aa5f968bca2ffaa8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;