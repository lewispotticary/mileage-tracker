// Get the modal
var loginModal = document.getElementById("login-modal");
var signupModal = document.getElementById("signup-modal");

// Get the button that opens the modal
var loginBtn = document.getElementById("loginButton");
var signupBtn = document.getElementById("signupButton");

// Get the <span> element that closes the modal
var loginSpan = document.getElementsByClassName("login-close")[0];
var signupSpan = document.getElementsByClassName("signup-close")[0];

// When the user clicks on the button, open the modal

loginBtn.onclick = function() {
  loginModal.style.display = "block";
}

signupBtn.onclick = function() {
  signupModal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
loginSpan.onclick = function() {
  loginModal.style.display = "none";
}

signupSpan.onclick = function() {
  signupModal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it


window.onclick = function(event) {
  if (event.target == signupModal) {
    signupModal.style.display = "none";
  }
  else if(event.target == loginModal){
    loginModal.style.display = "none";
  }
}
