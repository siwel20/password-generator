// Assignment code here
// Variables that will be used to make up the new password
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var characters = "!#$%&()*+,-./:;<=>?@[]^_`{|}~";
var numbers = "123456789";

function generatePassword() {
  var preparePassword = true;
  var passwordLength = 0;


  //loop to require validate selections
  while (preparePassword) {
    while (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)) {
      passwordLength = prompt("How long would you like your password to be? Your password length must be between 8 and 128.");
      if (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)) {
        alert("Your password selection is not long enough. Please enter a number between 8 and 128");
      }
    }
  }
  return;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
