
  function generatePassword() {
    console.log("generating my password running")
    var passwordLength = promptAndCheckLength()
    console.log("Password Length is: ", passwordLength);
    var selectedPasswordArray = promptAndCheckChar()
    console.log("My selected password array is: ", selectedPasswordArray)
    var userPassword = createFinalPassword(passwordLength, selectedPasswordArray)
    console.log("My randomised final password is: ", userPassword)
  return userPassword;
  console.log("generating password done.")
  }
  console.log(generatePassword());
 
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
      userSelection.push(lowerCaseCharacter);
  }
  var upperCaseConfirm = window.confirm('Would you like to include uppercase characters?');
  if (upperCaseConfirm === true) {
      userSelection.push(upperCaseCharacter);
  }
  var numberConfirm = window.confirm('Would you like to include number characters?');
  if (numberConfirm === true) {
      userSelection.push(numberCharacter);
  }
  var specialConfirm = window.confirm('Would you like to include special characters?');
  if (specialConfirm === true) {
      userSelection.push(specialCharacter);
  }

// Refresh/reset created if initial user response does not include any of the 4 character types.

  if(userSelection.length === 0 ){
    console.log("INVALID");
    window.alert("You are required to select at least one character type.");
    window.location.reload(true);
  }
  return userSelection;
}  

function createFinalPassword (passwordLength, selectedPasswordArray) {
  var password = "";
  for (var i = 0; i < passwordLength.length; i++) {
  password = selectedPasswordArray[Math.floor(Math.random() * (selectedPasswordArray.length))];
  }
  return password;
  }

    // ## Acceptance Criteria
   
  // WHEN all prompts are answered
  // THEN a password is generated that matches the selected criteria

  // example for loop - will be used as template for final password generation + then randomisation
// for (let i = 0; i < 10; i++) {
//   console.log(i)
// }

 // for (let i = 0; i < passwordLength; i++) {
  //   var newLetter; // = //get random element from selectedPasswordArray
  //   //add newLetter to userPassword
  
  // Final step - generate password:
  // create array that holds users preferences 
  // look into Maths.Random to randomize selection
  // loop to select a random character from the array. 'length of password' iterations
  
  // WHEN the password is generated
  // THEN the password is either displayed in an alert or written to the page

var generateBtn = document.querySelector("#generate");

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

generateBtn.addEventListener("click", writePassword);