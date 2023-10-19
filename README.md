# 03 JavaScript: Password Generator

## Description

Having been provided with starter code for HTML, CSS, and some Javascript, this web application builds upon these foundations to create a Random Password Generator that provides a series of prompts where appropriate to guide the user and responds intuitively to a user-defined series of criteria that consist of a randomised collection of lowercase, uppercase, numeric, and special characters. Once generated, this randomised string should provide a strong password that meets the requirements for a strigent and secure password usable not only in a personal context but also in cases of sensitive information being passed by an employee in a professional setting.

At this early stage in my coding journey, I have attempted to highlight my burgeoning proficiency in Javascipt basics through the employment of the following skills and methods:

1. I have made use of numerous arrays. The majority have been populated with distinct character sets the user will be required to choose their password from. A blank array has also been created which is used to append the user's choices from each Character Set as defined above through the .push() function.

2. Native Javascript methods such as .prompt(), .alert() and .confirm() have been used to guide the user experience and ensure all criteria have been met in the process of generating their secure password. A combination of 'if' statements and deployment of the .isNan() and .reload() functions have been used to hopefully provide a backstop wherein the browser can refresh and the process can  begin anew if our set password criteria is not met in the first instance.

3. Judicious use of console logging throughout to check the overflow of the code block is running as intended.

4. Numerous sub-functions created and nested within the overall generatePassword() function as the process of generating the final, randomised password string is chunked down into better understood step processes to provide a cleaner code reading and logic parsing experience.

5. A for loop has been used in conjunction with the Math.floor() and Math.random() methods to randomise the user's input in order to produce the final password string. generatePassword() is then called by the writePassword() function when the eventListener is triggered by the user clicking on the button.

## Screenshot of Finalised Application - Usage

Clicking the 'Generate Password' button will produce a series of prompts, requesting the desired length of your password, as well the character types you would like included in said password.

![img](./Images/Password%20Creator%20-%20Initial%20Prompt.png)

Upon completion of each individualised character confirmation prompt, your new password will display in the text area where "Your Secure Password" placeholder is currently visible.

![img](./Images/Password%20Creator%20-%20Randomised%20Password%20Displayed.png)

## Link to Deployed Application

