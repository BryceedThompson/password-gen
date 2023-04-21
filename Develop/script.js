// Assignment Code
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
    //prompts user to pick a length option
  var length = Number(prompt("Choose a length of at least 8 characters and no more than 128 characters"))

    //if the lenght is outside of our limits this changes it to be within them
  if (length < 8){
    length = 8;
    alert("You have selected a length less than 8. It is now set to 8.");
  }
  if (length > 128){
    length = 128;
    alert("You have selected a length greater than 128. It is now set to 128.");
  }

    //prompts user to enter the options 
  var charOptions = prompt("What character types should we include? 'uppercase, lowercase, numbers, symbols' to include. ")
    // creates an array of our options base off of , and space
  var charType = charOptions.toLowerCase().split(', ');
 
  var passwordText = document.querySelector("#password");

   // this generates our password
  function password(){
      // creates an object to hold a list of all our different variable options
    var charGen ={
      lowercase: 'abcdefghijklmnopqrstuvwxyz',
      uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
      numbers: '0123456789',
      symbols:'!@#$%^&*()_+~`|}{[]:;?/-=',
    };
      // creates and empty string for our for loop to populate
    var charSet = "";
      // populates charSet with all the options chosen by the user
    for(var i = 0; i < charType.length; i++){
      charSet += charGen[charType[i]];
    };
      // creates empty string for our password
    var returnValue = "";
      // randomly picks through charSet to create our password
    for (var i = 0; i < length; i++) {
      returnValue += charSet.charAt(Math.floor(Math.random() * charSet.length));
    }
    
      return returnValue;
    }
  passwordText.value = password();
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);




