// Assignment Code
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  
  var length = Number(prompt("Choose a length of at least 8 characters and no more than 128 characters"))
//while length is < 8 and >128
  var charOptions = prompt("What character types should we include? 'uppercase, lowercase, numbers, symbols' to include. ")
  
  var passwordText = document.querySelector("#password");

  function password(){
      var charGen ={
        lowercase: 'abcdefghijklmnopqrstuvwxyz',
        uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
        numbers: '0123456789',
        symbols:'!@#$%^&*()_+~`|}{[]:;?/-=',
      };

      var charType = charOptions.toLowerCase().split(', ');

      var charSet = "";

      for(var i = 0; i < charType.length; i++){
        charSet += charGen[charType[i]];
      };
        
      var returnValue = "";

      for (var i = 0; i < length; i++) {
        returnValue += charSet.charAt(Math.floor(Math.random() * charSet.length));
      }

    return returnValue;

  }
  passwordText.value = password();

}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);




