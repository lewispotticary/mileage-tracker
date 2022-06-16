import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";

import {getDatabase, ref, set, get, child, update, remove}
from "https://www.gstatic.com/firebasejs/9.6.1/firebase-database.js"

import { getAuth, createUserWithEmailAndPassword, signOut, signInWithEmailAndPassword, onAuthStateChanged, updateProfile } 
from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js"


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

// Initialize Firebase Auth
const auth = getAuth();

var userID;
var username;
const loginButton = document.getElementById("loginButton");
const signupButton = document.getElementById("signupButton");
const welcomeText = document.getElementById("welcomeText");

onAuthStateChanged(auth, (user) => {
    if(user){
        console.log(user);
        userID = user.uid;
        username = auth.currentUser.displayName;
        welcomeText.innerText = "Hi, " + username;
        loginButton.style.display = 'none';
        signupButton.style.display = 'none';
        logoutButton.style.display = 'block';
        welcomeText.style.display = 'flex';
    }
    else{
        logoutButton.style.display = 'none';
        welcomeText.style.display = 'none';
        loginButton.style.display = 'block';
        signupButton.style.display = 'block';
    }
});

var signup = document.getElementsByClassName("signup")[0];
var login = document.getElementsByClassName("login")[0];
var signupModal = document.getElementById("signup-modal");

//Sign Up Function

const signupForm = document.querySelector('.signup');

signupForm.addEventListener('submit', (e) => {
  e.preventDefault()

  const email = signupForm.email.value;
  const password = signupForm.password.value;
  const name = signupForm.name.value;

  createUserWithEmailAndPassword(auth, email, password)
    .then((cred) => {
      signupModal.style.display = "none";
      updateProfile(auth.currentUser, {
        displayName: name
      })
      welcomeText.innerText = "Hi, " + name;
      singup.reset();
    })
    .catch((err) => {
        console.log(err.message)
    })
})

//Sign In Function

const loginForm = document.querySelector('.login');
var loginModal = document.getElementById("login-modal");

loginForm.addEventListener('submit', (e) => {
  e.preventDefault()

  var email = loginForm.email.value;
  var password = loginForm.password.value;
  var loginError = document.getElementById("login-error");

  loginError.innerHTML = "";

  signInWithEmailAndPassword(auth, email, password)
    .then(() => {
        login.reset();
        loginModal.style.display = "none";
    })
    .catch((err) => {
        console.log(err.message)
    })  
})

//Log Out Function

const logoutButton = document.getElementById("logoutButton");

logoutButton.addEventListener('click', () => {
  signOut(auth)
  .then(() => {
    console.log('the user signed out')
  })
  .catch((err) => {
    console.log(err.message)
  })
})