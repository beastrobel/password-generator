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
      // Alerts user if input is invalid
      if (passwordLowercase !== "Y" && passwordLowercase !== "N") {
        alert("Invalid input. Please start over");
      }
    var passwordUppercase = prompt("Include uppercase letters? Y or N");
      // Alerts user if input is invalid
      if (passwordUppercase !== "Y" && passwordUppercase !== "N") {
        alert("Invalid input. Please start over");
      }
    var passwordNumbers = prompt("Include numbers? Y or N");
      // Alerts user if input is invalid
      if (passwordNumbers !== "Y" && passwordUppercase !== "N") {
        alert("Invalid input. Please start over");
      }
    var passwordSpecialCharacters = prompt("Include special characters? Y or N");
      // Alerts user if input is invalid
      if (passwordSpecialCharacters !== "Y" && passwordUppercase !== "N") {
        alert("Invalid input. Please start over");
      }
    }
    // Alerts user if password length is invalid
    else {
      alert("Invalid input. Please start over");
    }
  // Creates array with selected specs
  var shuffleLowercase = passwordLowercase;
  var shuffleUppercase = passwordUppercase;
  var shuffleNumbers = passwordNumbers;
  var shuffleSpecialCharacters = passwordSpecialCharacters;

  if (shuffleLowercase === "Y" && shuffleUppercase === "Y" && shuffleNumbers === "Y" && shuffleSpecialCharacters === "Y"){
    var selectedSpecs = [...lowerCase, ...upperCase, ...numbers, ...specialCharacters];
  }
  else if (shuffleLowercase === "Y" && shuffleUppercase === "Y" && shuffleNumbers === "Y" && shuffleSpecialCharacters === "N"){
    var selectedSpecs = [...lowerCase, ...upperCase, ...numbers];
  }
  else if (shuffleLowercase === "Y" && shuffleUppercase === "Y" && shuffleNumbers === "N" && shuffleSpecialCharacters === "Y"){
    var selectedSpecs = [...lowerCase, ...upperCase, ...specialCharacters];
  }
  else if (shuffleLowercase === "Y" && shuffleUppercase === "N" && shuffleNumbers === "Y" && shuffleSpecialCharacters === "Y"){
    var selectedSpecs = [...lowerCase, ...numbers, ...specialCharacters];
  }
  else if (shuffleLowercase === "N" && shuffleUppercase === "Y" && shuffleNumbers === "Y" && shuffleSpecialCharacters === "Y"){
    var selectedSpecs = [...upperCase, ...numbers, ...specialCharacters];
  }
  else if (shuffleLowercase === "N" && shuffleUppercase === "N" && shuffleNumbers === "Y" && shuffleSpecialCharacters === "Y"){
    var selectedSpecs = [...numbers, ...specialCharacters];
  }
  else if (shuffleLowercase === "N" && shuffleUppercase === "Y" && shuffleNumbers === "N" && shuffleSpecialCharacters === "Y"){
    var selectedSpecs = [...upperCase, ...specialCharacters];
  }
  else if (shuffleLowercase === "N" && shuffleUppercase === "Y" && shuffleNumbers === "Y" && shuffleSpecialCharacters === "N"){
    var selectedSpecs = [...upperCase, ...numbers];
  }
  else if (shuffleLowercase === "Y" && shuffleUppercase === "N" && shuffleNumbers === "N" && shuffleSpecialCharacters === "Y"){
    var selectedSpecs = [...lowerCase, ...specialCharacters];
  }
  else if (shuffleLowercase === "Y" && shuffleUppercase === "N" && shuffleNumbers === "Y" && shuffleSpecialCharacters === "N"){
    var selectedSpecs = [...lowerCase, ...numbers];
  }
  else if (shuffleLowercase === "Y" && shuffleUppercase === "Y" && shuffleNumbers === "N" && shuffleSpecialCharacters === "N"){
    var selectedSpecs = [...lowerCase, ...upperCase];
  }
  else if (shuffleLowercase === "Y" && shuffleUppercase === "N" && shuffleNumbers === "N" && shuffleSpecialCharacters === "N"){
    var selectedSpecs = [...lowerCase];
  }
  else if (shuffleLowercase === "N" && shuffleUppercase === "Y" && shuffleNumbers === "N" && shuffleSpecialCharacters === "N"){
    var selectedSpecs = [...upperCase];
  }
  else if (shuffleLowercase === "N" && shuffleUppercase === "N" && shuffleNumbers === "Y" && shuffleSpecialCharacters === "N"){
    var selectedSpecs = [...numbers];
  }
  else if (shuffleLowercase === "N" && shuffleUppercase === "N" && shuffleNumbers === "N" && shuffleSpecialCharacters === "Y"){
    var selectedSpecs = [...specialCharacters];
  }
  // Alerts user if no specs are selected
  else {
    alert("No specs selected. Please start over");
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
   console.log(selectedSpecs);
   document.querySelector("#password").innerHTML = selectedSpecs.join("");
}
// Generates password on click


generateBtn.addEventListener("click", generatePassword);
//function writePassword() {
 // var password = generatePassword();
 // var passwordText = document.querySelector("#password");

//  passwordText.value = password;
//}

// Creates password array
//for (i=0; i<=passwordLength; i++){
//  var password = Math.floor(Math.random() * 11);
//  console.log(password);
//}
//} 



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