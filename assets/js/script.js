// Assignment code here
// Variables that will be used to make up the new password
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var characters = "!#$%&()*+,-./:;<=>?@[]^_`{|}~";
var numbers = "123456789";

function generatePassword() {
  var preparePassword = true;
  var passwordLength = 0;
  var passwordOptions = [];
  var verifyArray = [];
  var verifyLowerCase = "lower case letters";
  var verifyUpperCase = " upper case letters";
  var verifyCharacters = " special characters";
  var verifyNumbers = " numbers";
  var newPassword = "";



  //loop to require validate selections
  while (preparePassword) {
    while (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)) {
      passwordLength = prompt("How long would you like your password to be? Your password length must be between 8 and 128.");
      if (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)) {
        alert("Your password selection is not long enough. Please enter a number between 8 and 128");
      }
    }

    // clears array
    passwordOptions = [];
    verifyArray = [];

    // verifies selections
    while (passwordOptions.length === 0) {
      var pwdLower = confirm("Would you like for your password to contain lower case letters? Click 'OK' for yes and 'Cancel' for no");
      if (pwdLower) {
        passwordOptions.push(lowerCase);
        verifyArray.push(verifyLowerCase);
      }

      var pwdUpper = confirm("Would you like for your password to contain upper case letters? Click 'OK' for yes and 'Cancel' for no");
      if (pwdUpper) {
        passwordOptions.push(upperCase);
        verifyArray.push(verifyUpperCase);
      }

      var pwdChar = confirm("Would you like for your password to contain special characters/symbols? Click 'OK' for yes and 'Cancel' for no");
      if (pwdChar) {
        passwordOptions.push(characters);
        verifyArray.push(verifyCharacters);
      }

      var pwdNumbers = confirm("Would you like for your password to contain numbers? Click 'OK' for yes and 'Cancel' for no");
      if (pwdNumbers) {
        passwordOptions.push(numbers);
        verifyArray.push(verifyNumbers);
      }

      if (passwordOptions.length === 0) {
        alert("No character information was selected. Please make at least one selection for your new password.");
      }
      else if (confirm("Your new password is " + passwordLength + " characters long and will have " + verifyArray + ". Is that correct? Click 'OK' to get your new password, or click 'Cancel' to change your criteria ")){
        preparePassword = false;
      } else {
        passwordLength = 0;
      }
    }
  }
  // create new password and verify there is enough information to generate the new password
  for(var i = 0; i < passwordLength && passwordOptions.length > 0 ; i++){
    var randomPassword = passwordOptions[Math.floor(Math.random()* passwordOptions.length)];
    newPassword += randomPassword[Math.floor(Math.random()* randomPassword.length)];
  }
  return newPassword;
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
