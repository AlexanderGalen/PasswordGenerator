

// Get references to the #generate element
let generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", passwordPrompt);


function generatePassword(length, lower, upper, num, symbol) {

  console.log(length);
  console.log(lower);
  console.log(upper);
  console.log(num);
  console.log(symbol);

  // list of lowercase characters to randomly choose from
  let lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  
  // list of uppercase characters to randomly choose from
  let upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  
  // list of number characters to randomly choose from
  let numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  
  // list of symbol characters to randomly choose from
  let symbols = [" ", "!", "\"", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "/", "]", "^", "_", "`", "{", "|", "}", "~", "]", ";"]; 
  
  
  
}

function passwordPrompt() {

  let passLength = promptForLength();
  let passChars = promptForChars();

  generatePassword(passLength, passChars.lower, passChars.upper, passChars.num, passChars.symbol);

}


function promptForLength() {
  let passLength = 0;
  // keep prompting if the selected length is invalid
  while(passLength < 1 || passLength > 128) {
  // prompt for length of password, must be between 1-128 characters
    passLength = prompt("Please input desired password length. Choice must be between 1 and 128");
  }
  return passLength;
}

function promptForChars() {
 
  let selectedChars = {
    lower: false,
    upper: false,
    num: false,
    symbol: false,
  };

  // keep prompting if all selections are false
  while(selectedChars.lower == false && selectedChars.upper == false && selectedChars.num == false && selectedChars.symbol == false) {
    
    alert("Choose which type of characters to include in your password, at least one type must be selected");

    // prompt for characters to use in password
    selectedChars.lower = confirm("do you want lowercase characters in your password?");
    selectedChars.upper = confirm("do you want uppercase characters in your password?");
    selectedChars.num= confirm("do you want numbers in your password?");
    selectedChars.symbol= confirm("do you want special characters in your password?");

  }

  return selectedChars;

}

