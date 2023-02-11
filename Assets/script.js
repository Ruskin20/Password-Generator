// Assignment code here
// 1- when i click on button, ask user for password length () and
// ask user  if they want lowercase, uppercase, numbers or symbols in password.
// 2-  at least one character type should be selected and input needs to be validated.
// 3- display generated password on screen.

//  Arrays of options for computer to pick from
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialcharacters = [" ", "!", "\"", "#", "$", "%", "&", "\'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~"];
var passwordLength = 8;
// Empty array for filling with characters
var pwdArray = [];
// Empty string to return



// String that generates password
function generatePassword() {
  var password = "";

  var length = parseInt(window.prompt("How many characters would you like to contain?"));
  if (length <= 8 || length >= 128) {
    return "Password must be at least 8 characters but less than 128 characters";

  };

  if (confirm("Press OK if you want to include Lowercase Letters") == true) {
    password += getRandomChar(lowercase)
    pwdArray = pwdArray.concat(lowercase);
  };
  if (confirm("Press OK if you want to include Uppercase Letters") == true) {
    password += getRandomChar(uppercase)
    pwdArray = pwdArray.concat(uppercase);
  };
  if (confirm("Press OK if you want to include Special Characters") == true) {
    password += getRandomChar(specialcharacters)
    pwdArray = pwdArray.concat(specialcharacters);
  };
  if (confirm("Press OK if you want to include Numbers") == true) {
    password += getRandomChar(numbers)
    pwdArray = pwdArray.concat(numbers);
  };

  //  Password length
  while (password.length < length) {
    password += getRandomChar(pwdArray)
  }
  return password;

}

function getRandomChar(arr) {
  var randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex]
}




//  Generator for Password button
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
