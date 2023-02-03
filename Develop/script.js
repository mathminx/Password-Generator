var capitalLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var smallLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var digits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var special = ["!", "#", "$", "%", "&", "(", ")", "*", "+", "-", "/", ":", ";", "<", "=", ">", "?", "@", "[", "^"];

var selectedCharacters = capitalLetters.concat(smallLetters, digits, special); 
var minLength = 8;
var maxLength = 120;
var newPassword = "";
var chosenLength ="";
var yesOrNo = ['y', 'Y', 'n', 'N']

//Ask user for the desired password length
function chooseLength () {
chosenLength ="";
var getLength = window.prompt("Enter a length between 8 and 120 characters for your password.");
if (getLength < minLength) {
    alert("The number you input is less than 8");
    chooseLength();
} else if (getLength > maxLength) {
alert("The number you input is more than 120");
chooseLength();
}  else chosenLength = getLength;
}

//Ask user if they want to include uppercase letters 
function chooseUppercase() {
var includeUppercase = window.prompt("Include uppercase letters?. (Y/N)");
if (!yesOrNo.includes(includeUppercase)) {
  alert("Please input Y or N");
  chooseUppercase()
}
}

//Ask user if they want to include lowercase letters 
function chooseLowercase() {
  var includeLowercase = window.prompt("Include lowercase letters?. (Y/N)");
  if (!yesOrNo.includes(includeLowercase)) {
    alert("Please input Y or N");
    chooseLowercase()
  }
  }
  
//Ask user if they want to include numbers 
function chooseNumbers() {
  var includeNumbers = window.prompt("Include numbers?. (Y/N)");
  if (!yesOrNo.includes(includeNumbers)) {
    alert("Please input Y or N");
    chooseLowercase()
  }
  }
  
//Ask user if they want to include special characters 
function chooseSpecialChars() {
  var includeSpecialChars = window.prompt("Include special characters?. (Y/N)");
  if (!yesOrNo.includes(includeSpecialChars)) {
    alert("Please input Y or N");
    chooseSpecialChars()
  }
  }
  
//Lets user choose which types of characters to include in the password
function getParameters () {
  chooseLength();
  chooseUppercase();
  chooseLowercase ();
  chooseNumbers();
  chooseSpecialChars();
}

//Generate a random password
function generatePassword () {
  newPassword="";
  for (var i = 0; i < chosenLength; i++) {
    var index = Math.floor(Math.random()*selectedCharacters.length);
    var randomChoice = selectedCharacters[index];
    newPassword = newPassword + randomChoice;
  }
}

// Write the password to the #password input
function writePassword() {
  var passwordText = document.querySelector("#password");
  passwordText.value = newPassword;
}

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", passwordMaker);

//Function to generate and display a random password 
function passwordMaker() {
  getParameters();
  generatePassword();
  writePassword();
} 