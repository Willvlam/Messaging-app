// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD57X2gOycQQBlPVJP9A-dAM1aUhtD3O_M",
  authDomain: "messages-86258.firebaseapp.com",
  databaseURL: "https://messages-86258-default-rtdb.firebaseio.com",
  projectId: "messages-86258",
  storageBucket: "messages-86258.firebasestorage.app",
  messagingSenderId: "950693813090",
  appId: "1:950693813090:web:74f8bc994ad3460fadea3b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
firebase.initializeApp(firebaseConfig);

// TEMPORARY TEST - delete this after fixing
document.addEventListener('DOMContentLoaded', () => {
    try {
        const db = firebase.database();
        document.getElementById('loginError').textContent = 'Firebase connected OK!';
    } catch(err) {
        document.getElementById('loginError').textContent = 'Firebase error: ' + err.message;
    }
});