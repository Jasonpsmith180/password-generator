// Array with lowercase characters for the password
var lowerCaseCharacters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

// Array with uppercase characters for the password
var upperCaseCharacters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

// Array with number characters for the password
var numberCharacters = ["1","2","3","4","5","6","7","8","9","0"];

// Array with special characters for the password
var specialCharacters = ["~","!","@","#","$","%","^","&","*","(",")","-","+","{","}","<",">","?"];

// Global variable for password criteria so the password can be combined after the script collects user inputs
var possibleCharacters = [];
// possibleCharacters.push(lowerCaseCharacters.concat(upperCaseCharacters));
// console.log(possibleCharacters);

// Create a function to prompt user for password criteria
function generatePassword() {

  var output = "";

  // Variable for password length set to the value of the user input
  var length = parseInt(prompt("How many characters would you like the password to be (MIN: 8 MAX: 128)"));

  // Create conditional statement to see if the user input a put a number less than 8 or larger than 128 and prompt them to enter a number between 8 and 128
  if (length < 8 || length > 128) {
    length = parseInt(prompt("Please enter a number between 8 and 128"));
  }
  
  // Prompts to have users choose password criteria
  // Prompt to include lowercase characters
  var useLowerCaseCharacters = confirm("Do you want the password to use lowercase characters?");

  // Prompt to include uppercase characters
  var useUpperCaseCharacters = confirm("Do you want the password to use uppercase characters?");

  // Prompt to include number characters
  var useNumberCharacters = confirm("Do you want the password to use number characters?");

  // Prompt to include special characters
  var useSpecialCharacters = confirm("Do you want the password to use special characters?");

  // Conditional statement to check that at least one criteria has been chosen
  if (useLowerCaseCharacters === false && useUpperCaseCharacters === false && useNumberCharacters === false && useSpecialCharacters === false) {
    alert("You must choose at least one criteria. Please try again.");
    generatePassword();
  }

  // Object to store all of the user's choices
  var password = {
    length: length,
    lowercase: useLowerCaseCharacters,
    uppercase: useUpperCaseCharacters,
    number: useNumberCharacters,
    special: useSpecialCharacters
  }

  // Conditional statements to designate which arrays to include in the password

  // Single Criteria Confirms
  // Lowercase only
  if (password.lowercase){
    possibleCharacters = lowerCaseCharacters;
  }
  // Uppercase only
  if (password.uppercase){
    possibleCharacters = upperCaseCharacters;
  }
  // Numbers only
  if (password.number) {
    possibleCharacters = numberCharacters;
  }
  // Special Only
  if (password.special) {
    possibleCharacters = specialCharacters;
  }

  // Two Criteria Confirms
  // Lowercase & Uppercase
  if (password.lowercase && password.uppercase) {
    possibleCharacters = lowerCaseCharacters.concat(upperCaseCharacters);
  }

  // Lowercase & Numbers
  if (password.lowercase && password.number) {
    possibleCharacters = lowerCaseCharacters.concat(numberCharacters);
  }

  // Lowercase & Special
  if (password.lowercase && password.special) {
    possibleCharacters = lowerCaseCharacters.concat(specialCharacters);
  }
  
  // Uppercase & Number 
  if (password.uppercase && password.number) {
    possibleCharacters = upperCaseCharacters.concat(numberCharacters);
  }

  // Uppercase & Special
  if (password.uppercase && password.special) {
    possibleCharacters = upperCaseCharacters.concat(specialCharacters);
  }

  if (password.number && password.special) {
    possibleCharacters = numberCharacters.concat(specialCharacters);
  }

  // Three Criteria Confirms
  // Lowercase, Uppercase & Number
  if (password.lowercase && password.uppercase && password.number) {
  possibleCharacters = lowerCaseCharacters.concat(upperCaseCharacters,numberCharacters);
  }

  // Lowercase, Uppercase & Special
  if (password.lowercase && password.uppercase && password.special) {
    possibleCharacters = lowerCaseCharacters.concat(upperCaseCharacters,specialCharacters);
  }

  // LowerCase, Number & Special
  if (password.lowercase && password.number && password.special) {
    possibleCharacters = lowerCaseCharacters.concat(numberCharacters,specialCharacters);
  }

  // Uppercase, Number & Special
  if (password.uppercase && password.number && password.special) {
    possibleCharacters = upperCaseCharacters.concat(numberCharacters,specialCharacters);
  }

  // All Criteria Confirms
  if (password.lowercase && password.uppercase && password.number && password.special) {
    possibleCharacters = lowerCaseCharacters.concat(upperCaseCharacters,numberCharacters,specialCharacters);
  }
  
  for(var i = 0; i < length; i++) {
    output += possibleCharacters[Math.floor(Math.random() * possibleCharacters.length)];
  }
  return output;
}

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
