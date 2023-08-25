// Assignment Code
var generateBtn = document.querySelector("#generate");

// Defines characters
const lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]; 
const upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]; 
const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
const specialCharacters = ["!", "@", "#", "$", "%", "&", "*", "?"]; 

function generatePassword() {
  var passwordLength = prompt("Please select a password length between 8 and 128 characters");
    if (passwordLength >= 8 && passwordLength <= 128) {
    var passwordLowercase = prompt("Include lowercase letters? Y or N");
    var passwordUppercase = prompt("Include uppercase letters? Y or N");
    var passwordNumbers = prompt("Include numbers? Y or N");
    var passwordSpecialCharacters = prompt("Include special characters? Y or N");
    }
    // Alerts user if password length is invalid
    else {
      alert("Invalid password length. Please try again.");
      abort();
    }

  // Creates custom array with selected specs
  if (passwordLowercase == "Y" && passwordUppercase == "Y" && passwordNumbers == "Y" && passwordSpecialCharacters == "Y"){
    var selectedSpecs = [...lowerCase, ...upperCase, ...numbers, ...specialCharacters];
  }
  else if (passwordLowercase == "Y" && passwordUppercase == "Y" && passwordNumbers == "Y" && passwordSpecialCharacters == "N"){
    var selectedSpecs = [...lowerCase, ...upperCase, ...numbers];
  }
  else if (passwordLowercase == "Y" && passwordUppercase == "Y" && passwordNumbers == "N" && passwordSpecialCharacters == "Y"){
    var selectedSpecs = [...lowerCase, ...upperCase, ...specialCharacters];
  }
  else if (passwordLowercase == "Y" && passwordUppercase == "N" && passwordNumbers == "Y" && passwordSpecialCharacters == "Y"){
    var selectedSpecs = [...lowerCase, ...numbers, ...specialCharacters];
  }
  else if (passwordLowercase == "N" && passwordUppercase == "Y" && passwordNumbers == "Y" && passwordSpecialCharacters == "Y"){
    var selectedSpecs = [...upperCase, ...numbers, ...specialCharacters];
  }
  else if (passwordLowercase == "N" && passwordUppercase == "N" && passwordNumbers == "Y" && passwordSpecialCharacters == "Y"){
    var selectedSpecs = [...numbers, ...specialCharacters];
  }
  else if (passwordLowercase == "N" && passwordUppercase == "Y" && passwordNumbers == "N" && passwordSpecialCharacters == "Y"){
    var selectedSpecs = [...upperCase, ...specialCharacters];
  }
  else if (passwordLowercase == "N" && passwordUppercase == "Y" && passwordNumbers == "Y" && passwordSpecialCharacters == "N"){
    var selectedSpecs = [...upperCase, ...numbers];
  }
  else if (passwordLowercase == "Y" && passwordUppercase == "N" && passwordNumbers == "N" && passwordSpecialCharacters == "Y"){
    var selectedSpecs = [...lowerCase, ...specialCharacters];
  }
  else if (passwordLowercase == "Y" && passwordUppercase == "N" && passwordNumbers == "Y" && passwordSpecialCharacters == "N"){
    var selectedSpecs = [...lowerCase, ...numbers];
  }
  else if (passwordLowercase == "Y" && passwordUppercase == "Y" && passwordNumbers == "N" && passwordSpecialCharacters == "N"){
    var selectedSpecs = [...lowerCase, ...upperCase];
  }
  else if (passwordLowercase == "Y" && passwordUppercase == "N" && passwordNumbers == "N" && passwordSpecialCharacters == "N"){
    var selectedSpecs = [...lowerCase];
  }
  else if (passwordLowercase == "N" && passwordUppercase == "Y" && passwordNumbers == "N" && passwordSpecialCharacters == "N"){
    var selectedSpecs = [...upperCase];
  }
  else if (passwordLowercase == "N" && passwordUppercase == "N" && passwordNumbers == "Y" && passwordSpecialCharacters == "N"){
    var selectedSpecs = [...numbers];
  }
  else if (passwordLowercase == "N" && passwordUppercase == "N" && passwordNumbers == "N" && passwordSpecialCharacters == "Y"){
    var selectedSpecs = [...specialCharacters];
  }
  // Alerts user if no specs are selected
  else {
    alert("Error. Please try again");
  }

  // Shuffles arrays - used Stack Overflow as a reference
  function shuffleArray(){
    let currentIndex = selectedSpecs.length, randomIndex;
    while (currentIndex != 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [selectedSpecs[currentIndex], selectedSpecs[randomIndex]] = [
        selectedSpecs[randomIndex], selectedSpecs[currentIndex]];
    }
    return selectedSpecs;
  }
  shuffleArray(selectedSpecs);

  // Cuts down number of characters to password length
  selectedSpecs.length=passwordLength;

  // Outputs password to webpage, 'join' removes commas from array 
  document.querySelector("#password").innerHTML = selectedSpecs.join("");
}

// Generates password on click
generateBtn.addEventListener("click", generatePassword);