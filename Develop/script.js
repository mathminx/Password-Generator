
//button to generate password

//password criteria: 
  //  - length between 8 and 128 characters
      //validate length
  //  - character types:
      //    - lowercase
      //    - uppercase
      //    - numeric
      //    - special
          // list of special characters as string: " !"#$%&'()*+,-./:;<=>?@[\]^_`{|}~"

//when all prompts are answered:
    //validate that at least one character type has been chosen

//generate password that matches the selected criteria

//display the password in an alert or write it to the page





// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
