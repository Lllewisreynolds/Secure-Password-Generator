
  function generatePassword() {
    console.log("generating my password running");
    var passwordLength = promptAndCheckLength()
    console.log("Password Length is: ", passwordLength);
    var selectedPasswordArray = promptAndCheckChar()
    console.log("My selected password array is: ", selectedPasswordArray);
    var userPassword = createFinalPassword(passwordLength, selectedPasswordArray)
    console.log("My randomised final password is: ", userPassword);
    console.log("generating password done.");
    return userPassword;
  }

  function promptAndCheckLength() {
    console.log("About to get length")
    // Prompt created to elicit initial user response
    var userSelection = window.prompt("What length password would you like?");

    // Alert created if password length does not meet set criteria
    if ((userSelection < 8) || (userSelection > 128)) {
      window.alert("Password must be a length of at least 8 characters and no more than 128 characters");
      window.location.reload(true)
    }
    // Reset created if initial user response is not a number
    if (isNaN(userSelection)) {
      window.alert("Password length must be in numerical format");
      userSelection = 0;
      window.location.reload(true)
    }
    console.log("Done prompting for length")
    return userSelection;
  }

function promptAndCheckChar() {
  // An array has been created and populated for each Character Set the user will choose their password from.
  var lowerCaseCharacter = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var upperCaseCharacter = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var numberCharacter = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  var specialCharacter = ["@", "!",  "#", "$", "%", "&", "*", "(", ")", "^", "+", "?", "/", "-", ":", ";", "[", "]", "{", "}", "<", ">", "=", "_", "`", "|", "~", ".",];
  // Blank array created. This will be used to append the user's choices from each Character Set defined above.
  var userSelection = [];

  // Native Javascript.confirm function used to pass through each of the user's character type choices for their password.
  var lowerCaseConfirm = window.confirm('Would you like to include lowercase characters?');
  if (lowerCaseConfirm === true) {
    for(char of lowerCaseCharacter){
      userSelection.push(char)
    }
  }
  var upperCaseConfirm = window.confirm('Would you like to include uppercase characters?');
  if (upperCaseConfirm === true) {
    for(char of upperCaseCharacter){
      userSelection.push(char)
    }
  }
  var numberConfirm = window.confirm('Would you like to include number characters?');
  if (numberConfirm === true) {
    for(char of numberCharacter){
      userSelection.push(char)
    }
  }
  var specialConfirm = window.confirm('Would you like to include special characters?');
  if (specialConfirm === true) {
    for(char of specialCharacter){
      userSelection.push(char)
    }
  }

// Refresh/reset created if initial user response does not include any of the 4 character types.
  if(userSelection.length === 0 ){
    console.log("INVALID");
    window.alert("You are required to select at least one character type.");
    window.location.reload(true);
  }
  return userSelection;
}  

// For loop iterates through the user's defined password length, adding a new character from the previously generated selected character type array with each go around to create our final password string.
// These selected character types are randomised and rounded down through the use of the Math.floor and Math.random functions.
function createFinalPassword (passwordLength, selectedPasswordArray) {
  var finalPasswordString = "";
  for (var i = 0; i < passwordLength; i++) {
  finalPasswordString += selectedPasswordArray[Math.floor(Math.random() * (selectedPasswordArray.length))];
  }
  console.log(finalPasswordString);
  return finalPasswordString;
  }

var generateBtn = document.querySelector("#generate");

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

generateBtn.addEventListener("click", writePassword);
