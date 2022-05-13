import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.1/firebase-app.js";

//Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCt2EomtQ3PTyLGUdjkpQMyZqn5nML6mFM",
    authDomain: "mileage-tracker-343412.firebaseapp.com",
    projectId: "mileage-tracker-343412",
    storageBucket: "mileage-tracker-343412.appspot.com",
    messagingSenderId: "41436369280",
    appId: "1:41436369280:web:8d3971e171b471d367f165"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Database
const db = getDatabase();

// Initialize Firebase Auth
const auth = getAuth();