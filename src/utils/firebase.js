// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDkQyR7FCcR59oQiCm0Kmc5BmZYTYrrRI4",
  authDomain: "netflixgpt-5e567.firebaseapp.com",
  projectId: "netflixgpt-5e567",
  storageBucket: "netflixgpt-5e567.appspot.com",
  messagingSenderId: "518596187511",
  appId: "1:518596187511:web:f6b5bf0e29ea14292d7d72",
  measurementId: "G-BKVKQRS1P4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();