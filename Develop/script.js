// An array has been created and populated for each Character Set the user will choose their password from.

// Do these need to be global, or can all of the code I create go within the generatePassword() function?

var lowerCaseCharacter = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCaseCharacter = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numberCharacter = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialCharacter = ["@", "!",  "#", "$", "%", "&", "*", "(", ")", "^", "+", "?", "/", "-", ":", ";", "[", "]", "{", "}", "<", ">", "=", "_", "`", "|", "~", ".",];

// Blank array created. This will be used to append the user's choices from each Character Set defined above. Use push?

var selectedPasswordArray = [];

var userSelection;


// Use .confirm() method to confirm password is acceptable to user "Do you want this?" - provides a boolean - once password is input



  function generatePassword() {
    promptAndCheckLength()
    // promptChar()
    // checkChar()
    // createPassword()
  }
  
  function promptAndCheckLength() {
    // Prompt created to elicit initial user response
    if (!userSelection) {
      var userSelection = window.prompt("What length password would you like?");
    }
    // Alert created if password length does not meet set criteria
    if ((userSelection < 8) || (userSelection > 128)) {
      window.alert("Password must be a length of at least 8 characters and no more than 128 characters");
      window.location.reload(true)
    }
    // Reset created if initial user response is not a number
    if (isNaN(userSelection)) {
      window.alert("Password must be in numerical format");
      userSelection = 0;
      window.location.reload(true)
    }
    return userSelection
  }
    
    // ## Acceptance Criteria
  
  
  // THEN I am presented with a series of prompts for password criteria
  // Use .prompt() function to prompt the user to follow the set criteria for password characters
  // Use .confirm() function to confirm the user has used the set criteria for password characters
  
  // WHEN asked for character types to include in the password
  // THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
  // Use .confirm() function
  
   
  // WHEN I answer each prompt
  // THEN my input should be validated and at least one character type should be selected
  // WHEN all prompts are answered
  // THEN a password is generated that matches the selected criteria
  
  // Create a variable array that holds all the user's choices.
  // Use math.floor & math.random to randomise this selection?
  
  // WHEN the password is generated
  // THEN the password is either displayed in an alert or written to the page
  


var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  // What has been called but hasn't been defined/declared - generatePassword is a function that is being called but hasn't been defined
// Our assignment is to create this function.
}

generateBtn.addEventListener("click", writePassword);

