
import { initializeApp } from "firebase/app";
//  Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDRNGW0wCGv7zOi-3SjCnF5izSQvGheZWY",
  authDomain: "collab-db-1.firebaseapp.com",
  projectId: "collab-db-1",
  storageBucket: "collab-db-1.appspot.com",
  messagingSenderId: "792629809436",
  appId: "1:792629809436:web:6bf0bbbb3e32cc0d276ad9"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);