var capitalLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var smallLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var digits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var special = ["!", "#", "$", "%", "&", "(", ")", "*", "+", "-", "/", ":", ";", "<", "=", ">", "?", "@", "[", "^"];
var choices = [];
var selectedCharacters = []; 
var yesOrNo = ['Y', 'N'];

var minLength = 8;
var maxLength = 120;
var newPassword;
var chosenLength;

// Generate Button
var generateBtn = document.querySelector("#generate");

// Add event listener to Generate Button
generateBtn.addEventListener("click", chooseLength)

//Ask user to input desired password length
function chooseLength() {
  choices = [];
  selectedCharacters = [];
  chosenLength;
  getLength=null; 
  var getLength = window.prompt("Enter a length between 8 and 120 characters for your password.");
  chosenLength = Number(getLength);
  //If user clicks Cancel or if user clicks OK with nothing input, end the function 
  if (getLength === null || !getLength) {
    cancelScript();
    return;
  }
  //Check for non-numeric characters
  else if (isNaN(chosenLength)) {
      alert("Your input contained a non-numeric character");
      chooseLength();
  }
  //Check that input is a whole number
  else if (!Number.isInteger(chosenLength)) {
    alert("You must input a whole number");
    chooseLength();
  }
  //Check that user did not input a number less than 8
  else if (chosenLength < minLength) {
    alert("The number you input is less than 8");
    chooseLength();
  } 
  //Check that user did not input a number great than 120
  else if (chosenLength > maxLength) {
    alert("The number you input is more than 120");
    chooseLength();
  }
  else {
    chooseUppercase(); 
  }
}

//Ask user if they want to include uppercase letters 
function chooseUppercase() {
  includeUppercase = window.prompt("Include uppercase letters? (Y/N)");
  if (includeUppercase) {
    includeUppercase = includeUppercase.toUpperCase();
  }
  //If user clicks Cancel, end the function 
  if (!includeUppercase) {
    cancelScript();
    return;
  }
  else if (!yesOrNo.includes(includeUppercase)) {
    alert("Please input Y or N");
    chooseUppercase();
  }
  else if (includeUppercase === "Y") {
    choices = selectedCharacters.concat(capitalLetters);
    selectedCharacters = choices;
    chooseLowercase();
  }
  else {
    chooseLowercase("chooseUppercase");
  }
}

  //Ask user if they want to include lowercase letters 
  function chooseLowercase() {
    var includeLowercase = window.prompt("Include lowercase letters? (Y/N)");
    if (includeLowercase) {
    includeLowercase = includeLowercase.toUpperCase();
    }
    //If user clicked Cancel, end the function 
    if (!includeLowercase) {
      cancelScript();
      return;
    }
    else if (!yesOrNo.includes(includeLowercase)) {
      alert("Please input Y or N");
      chooseLowercase();
    }
    else if (includeLowercase === "Y") {
      choices = selectedCharacters.concat(smallLetters);
      selectedCharacters = choices;
      chooseNumbers();
    } 
    else {
      chooseNumbers();
    }
  }
   
  //Ask user if they want to include numbers 
  function chooseNumbers() {
    var includeNumbers = window.prompt("Include numbers? (Y/N)");
    if (includeNumbers) {
      includeNumbers = includeNumbers.toUpperCase();
      }
    //If user clicked Cancel, end the function 
    if (!includeNumbers) {
      cancelScript();
      return;
    }
    else if (!yesOrNo.includes(includeNumbers)) {
      alert("Please input Y or N");
      chooseNumbers()
    }
    else if (includeNumbers === "Y") {
      choices = selectedCharacters.concat(digits);
      selectedCharacters = choices; 
      chooseSpecialChars();
    }
    else {
    chooseSpecialChars();
    }
  }
    
  //Ask user if they want to include special characters 
  function chooseSpecialChars() {
    var includeSpecialChars = window.prompt("Include special characters? (Y/N)");
    if (includeSpecialChars) {
      includeSpecialChars = includeSpecialChars.toUpperCase();
      }
    //If user clicked Cancel, end the function 
    if (!includeSpecialChars) {
      cancelScript();
      return;
    }
    else if (!yesOrNo.includes(includeSpecialChars)) {
      alert("Please input Y or N");
      chooseSpecialChars();
    }
    else if (includeSpecialChars === "Y") {
      choices = selectedCharacters.concat(special);
      selectedCharacters = choices;
      checkParameters();
    }
    else {
    checkParameters();
    }
  }

//Checks that user chose at least one type of characters to include in the password
function checkParameters() {
  if (selectedCharacters.length === 0) {
    alert("You must select at least one type of character");
    chooseUppercase();
  }
  else {
    generatePassword();
  }
 }

//Generate a random password
function generatePassword () {
    newPassword="";
    for (var i = 0; i < chosenLength; i++) {
    var index = Math.floor(Math.random()*selectedCharacters.length);
    var randomChoice = selectedCharacters[index];
    newPassword = newPassword + randomChoice;
  }
  writePassword();
}

// Write the password to the #password input
function writePassword() {
  var passwordText = document.querySelector("#password");
  passwordText.value = newPassword;
}

// Write the password to the #password input
function cancelScript () {
  newPassword = "** cancelled **"
  writePassword();
}