

// The password can include special characters. If you’re unfamiliar with these, see this [list of password special characters](https://www.owasp.org/index.php/Password_special_characters) from the OWASP Foundation.


// Assignment Code

var generateBtn = document.querySelector("#generate");

// How do I ask the question / prompt the user for a password?

// Use .confirm() method to confirm password is acceptable to user "Do you want this?" - provides a boolean - once password is input
// Use .alert() method to provide a specific message if password does not meet our set criteria 



function generatePassword() {
  
  // ## Acceptance Criteria

// THEN I am presented with a series of prompts for password criteria
// Use .prompt() function to prompt the user to follow the set criteria for password characters
// Use .confirm() function to confirm the user has used the set criteria for password characters


// WHEN prompted for the length of the password

// Use .prompt() function to prompt the user to follow the set criteria for password length
// THEN I choose a length of at least 8 characters and no more than 128 characters

// Create var passwordLength = prompt("What would you like your password length to be? Please note the password must be between 8 and no more than 128 characters") {

}

// WHEN asked for character types to include in the password
// THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
// Use .confirm() function

// No way to store these character lists yet - use variable arrays for each
 
// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria

// Create a variable array that holds all the user's choices.
// Use math.floor & math.random to randomise this selection?

// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page

}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  // What has been called but hasn't been defined/declared - generatePassword is a function that is being called but hasn't been defined
// Our assignment is to create this function.
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

