// Array with lowercase characters for the password
var lowerCaseCharacters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

// Array with uppercase characters for the password
var upperCaseCharacters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

// Array with number characters for the password
var numberCharacters = ["1","2","3","4","5","6","7","8","9","0"];

// Array with special characters for the password
var specialCharacters = ["~","!","@","#","$","%","^","&","*","(",")","-","+","{","}","<",">","?"];

// Create a function to prompt user for password criteria
function generatePassword() {

  // Variable for password length set to the value of the user input
  var length = parseInt(prompt("How many characters would you like the password to be (MIN: 8 MAX: 128)"));

  // Create conditional statement to see if the user input a put a number less than 8 or larger than 128 and prompt them to enter a number between 8 and 128
  if (length < 8 || length > 128) {
    length = parseInt(prompt("Please enter a number between 8 and 128"));
  }
  
  // Prompts to have users choose password criteria
  // Create prompt to include lowercase characters
  var useLowerCaseCharacters = confirm("Do you want the password to use lowercase characters?");

  // Create prompt to include uppercase characters
  var useUpperCaseCharacters = confirm("Do you want the password to use uppercase characters?");

  // Create prompt to include number characters
  var useNumberCharacters = confirm("Do you want the password to use number characters?");

  // Create prompt to include special characters
  var useSpecialCharacters = confirm("Do you want the password to use special characters?");

  // Create conditional statement to check that at least one criteria has been chosen
  if (useLowerCaseCharacters === false && useUpperCaseCharacters === false && useNumberCharacters === false && useSpecialCharacters === false) {
    alert("You must choose at least one criteria. Please try again.");
    generatePassword();
  }

  // // Create an object to store all of the user's choices
  // var passwordCriteria

  console.log(length);
  console.log(useLowerCaseCharacters);
  console.log(useUpperCaseCharacters);
  console.log(useNumberCharacters);
  console.log(useSpecialCharacters);
}


// Create a function to pull a random index from an array
function getRandom(params) {
  
}

// Create function to generate password with user inputs and getRandom()


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
