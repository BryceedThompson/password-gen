// Assignment Code
var generateBtn = document.querySelector("#generate");
var length = 128;
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var uperCase = lowerCase.toUpperCase();
var numeric = "0123456789";
var specialCharacter = true;
var options = ["Y", "N"];


function generatePassword(){
  var userInput = prompt("Enter 'Y' for Yes, and 'N' for No");
  if (!userInput){
    return;
  }
  userInput = userInput.toUpperCase();

}

// Write password to the #password input
function writePassword() {

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

//function testing(){
 // var userInput = prompt("Enter 'Y' for Yes, and 'N' for No");
//}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
writePassword();