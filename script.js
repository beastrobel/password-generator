// Assignment Code
var generateBtn = document.querySelector("#generate");

// Defines possible characters
const lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]; 
const upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]; 
const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
const specialCharacters = ["!", "@", "#", "$", "%", "&", "*", "?"]; 

// Prompts user for password specs on click
function promptSpecs() {
  var passwordLength = prompt("Please select a password length between 8 and 128 characters");
    if (passwordLength >= 8 && passwordLength <=128) {
    var passwordLowercase = prompt("Include lowercase letters? Y or N");
      // Alerts user if input is invalid
      if (passwordLowercase !== "Y" && passwordLowercase !== "N") {
        alert("Invalid input. Please start over");
        abort();
      }
    var passwordUppercase = prompt("Include uppercase letters? Y or N");
      // Alerts user if input is invalid
      if (passwordUppercase !== "Y" && passwordUppercase !== "N") {
        alert("Invalid input. Please start over");
        abort();
      }
    var passwordNumbers = prompt("Include numbers? Y or N");
      // Alerts user if input is invalid
      if (passwordNumbers !== "Y" && passwordUppercase !== "N") {
        alert("Invalid input. Please start over");
        abort();
      }
    var passwordSpecialCharacters = prompt("Include special characters? Y or N");
      // Alerts user if input is invalid
      if (passwordSpecialCharacters !== "Y" && passwordUppercase !== "N") {
        alert("Invalid input. Please start over");
        abort();
      }
    }
    // Alerts user if password length is invalid
    else {
      alert("Invalid input. Please start over");
      abort();
    }
}
  
generateBtn.addEventListener("click", promptSpecs);

// Creates random password based on specs
 // function generatePassword() {
      // Specs
      

// Write password to the #password input
//function writePassword() {
  //var password = generatePassword();
  //var passwordText = document.querySelector("#password");

 // passwordText.value = password;


// Add event listener to generate button
//generateBtn.addEventListener("click", generatePassword);