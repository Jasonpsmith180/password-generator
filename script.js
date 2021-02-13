// Create array with lowercase characters for the password
var lowerCaseCharacters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

// Create array with uppercase characters for the password
var upperCaseCharacters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

// Create array with number characters for the password
var numberCharacters = ["1","2","3","4","5","6","7","8","9","0"];

// Create array with special characters for the password
var specialCharacters = ["~","!","@","#","$","%","^","&","*","(",")","-","+","{","}","<",">","?"];

// Create a functions to prompt user for password criteria
function getPasswordCriteria() {

  // Create a variable for password length and set the value to the user input
  var length = window.prompt("How many characters would you like the password to be (MIN: 8 MAX: 128)");

  // // Create conditional if statement to see if the user put a number less than 8 and prompt them to enter a larger number
  // if (length < 8) {
  //   alert
  // }
  // // Create conditional if statement to see if the user put a number more than 128 and prompt them to enter a smaller number
  // if (length > 128){
  //   alert
  // }

  // // Create prompts to have users choose password criteria
  // // Create prompt to include lowercase characters
  // var useLowerCaseCharacters

  // // Create prompt to include uppercase characters
  // var useUpperCaseCharacters

  // // Create prompt to include number characters
  // var useNumberCharacters

  // // Create prompt to include special characters
  // var useSpecialCharacters

  // // Create conditional statement to check that at least one criteria has been chosen
  // // if (useLowerCaseCharacters === false && useUpperCaseCharacters === false && useNumberCharacters === false && useSpecialCharacters === false) {
  // //   alert
  // // }

  // // Create an object to store all of the user's choices
  // var passwordCriteria
}
console.log(length);

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
