// Assignment Code
var generateBtn = document.querySelector("#generate");


 
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var length = Number(prompt("Choose a length of at least 8 characters and no more than 128 characters"))
  var charType = prompt("What character types should we include? 'uppercase, lowercase, numbers, symbols' to include. ")
  
  var passwordText = document.querySelector("#password");

  function password(){
      var charGen ={
        lowerCase: 'abcdefghijklmnopqrstuvwxyz',
        upperCase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
        numeric: '0123456789',
        specialCharacter:'!@#$%^&*()_+~`|}{[]:;?/-=',
      };
      var charTypes = charType.toLowerCase().split(', ');

      var charSet = "";
      for(var i = 0; i < charTypes.length; i++){
        charSet += charGen[charTypes[i]];
      };
        
      var retVal = "";
      for (var i = 0; i < length; i++) {
        retVal += charSet.charAt(Math.floor(Math.random() * charSet.length));
      }
    return retVal;
  }
  passwordText.value = password();
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);




