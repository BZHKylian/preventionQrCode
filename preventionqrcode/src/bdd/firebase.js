// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, runTransaction } from 'firebase/database';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAtWbPk7iyoFGVUEqXP5Vsp70QGjWiqQrE",
  authDomain: "compteurvueunique-a5930.firebaseapp.com",
  databaseURL: "https://compteurvueunique-a5930-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "compteurvueunique-a5930",
  storageBucket: "compteurvueunique-a5930.firebasestorage.app",
  messagingSenderId: "1059451654332",
  appId: "1:1059451654332:web:6e9af0d4fd859d235580b9",
  measurementId: "G-FWM3P3WBMH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);


export { database, ref, runTransaction };