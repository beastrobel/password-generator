// Assignment Code
var generateBtn = document.querySelector("#generate");

// Prompts information
function generatePassword() {
  const lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]; 
  const upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]; 
  const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
  const specialCharacters = ["!", "@", "#", "$", "%", "&", "*", "?"]; 
  function promptSpecs() {
    var passwordLength = prompt("Please select a password length between 8 and 128 characters");
    var passwordLowercase = prompt("Include lowercase letters?");
    var passwordUppercase = prompt("Include uppercase letters?");
    var passwordNumbers = prompt("Include numbers?");
    var passwordSpecialCharacters = prompt("Include special characters?");
  }
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", generatePassword);


