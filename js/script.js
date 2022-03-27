// variables :
let $ = document;
let signUpBtn = $.getElementById("sign-up");
let signInBtn = $.getElementById("sign-in");
let overlayLeftDiv = $.querySelector(".overlay-left");
let overlayRightDiv = $.querySelector(".overlay-right");
let signUpFormDiv = $.querySelector(".sign-up-form");
let signInFormDiv = $.querySelector(".sign-in-form");

// events :
signUpBtn.addEventListener("click", switchFormToSignUp);
signInBtn.addEventListener("click", switchFormToSignIn);

// functions:
function switchFormToSignUp() {
  overlayLeftDiv.style.cssText = "left:-100%; z-index:2; opacity:0";
  signInFormDiv.style.cssText = "left:100%; z-index:2; opacity:0";
  overlayRightDiv.style.cssText = "z-index:0; opacity:1;";
  signUpFormDiv.style.cssText = "z-index:0; opacity:1;";
}

function switchFormToSignIn() {
  overlayRightDiv.style.cssText = "left:100%; z-index:2 opacity:0";
  signUpFormDiv.style.cssText = "left:-100%; z-index:2 opacity:0";
  overlayLeftDiv.style.cssText = "left:0; z-index:0; opacity:1";
  signInFormDiv.style.cssText = "left:0; z-index:0; opacity:1";
}
