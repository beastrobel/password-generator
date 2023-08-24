// Assignment Code
var generateBtn = document.querySelector("#generate");

// Generates password based on prompts
function generatePassword () {
  prompt("Please select a password length between 8 and 128 characters");
  prompt("Include lowercase letters?");
  prompt("Include uppercase letters?");
  prompt("Include numbers?");
  prompt("Include special characters?");
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", generatePassword);

event.preventDefault();
event.stopPropagation();
