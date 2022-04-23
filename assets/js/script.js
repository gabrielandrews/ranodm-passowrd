// Assignment code here

// arrays that house all characters required for building a password
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "N", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var specialChar = ["!", "#", "$", "%", "&", "*", "+", "-", ".", "/", ";", ":", "<", ">", "=", "?", "@", "^", "_"];
var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];

// a blank string to put randomly chosen indexes into and concatenate together to build the password
var pass = "";

// initializes these variables as global variables to use in any function (responses are local variables without this)
var promptLowerCase = "";
var promptUpperCase = "";
var promptSpecialChar = "";
var promptNumbers = "";
var passLength = 0;

// function that selects a random index using an arrays length
var randomize = function(max) {

  var value = Math.floor(Math.random() * max);

  return value;

};

// retrieve user input for how long to make the password (must be between 8 and 128 characters)
var choosePassLength  = function () {

 passLength =  window.prompt("How many characters would you like to have in your password? Please choose between 8 and 128 characters.");

 return passLength;

}

// retrieve user input for whether or not to use lowercase chars, then convert response to a lowercase string for if/else statements
var promptLowerCaseFunc = function() {

  promptLowerCase = window.prompt("Would you like lowercase characters in your password? Please type YES or NO.");

  // make the cancel button work
  if (promptLowerCase === null) {
    return;
  }

  // check for correct response; if not correct, then force user to try again
  else if (promptLowerCase !== "yes" && promptLowerCase !== "no") {
    window.alert("You must choose either yes or no. Please try again.");
    return promptLowerCaseFunc();
  }

  promptLowerCase = promptLowerCase.toLowerCase();
  return promptLowerCase;

}

// retrieve user input for whether or not to use uppercase chars, then convert response to a lowercase string for if/else statements
var promptUpperCaseFunc = function() {
  
  promptUpperCase = window.prompt("Would you like uppercase characters in your password? Please type YES or NO.");

  // make the cancel button work
  if (promptUpperCase === null) {
    return;
  }

  // check for correct response; if not correct, then force user to try again
  else if (promptUpperCase !== "yes" && promptUpperCase !== "no") {
    window.alert("You must choose either yes or no. Please try again.");
    return promptUpperCaseFunc();
  }

  promptUpperCase = promptUpperCase.toLowerCase();  
  return promptUpperCase;

}

// retrieve user input for whether or not to use special chars, then convert response to a lowercase string for if/else statements
var promptSpecialCharFunc = function() {
  
  promptSpecialChar = window.prompt("Would you like special characters in your password? Please type YES or NO.");

  // make the cancel button work
  if (promptSpecialChar === null) {
    return;
  } 

  // check for correct response; if not correct, then force user to try again
  else if (promptSpecialChar !== "yes" && promptSpecialChar !== "no") {
    window.alert("You must choose either yes or no. Please try again.");
    return promptSpecialCharFunc();
  } 
  
  promptSpecialChar = promptSpecialChar.toLowerCase();
  return promptSpecialChar;

}

// retrieve user input for whether or not to use numbers, then convert response to a lowercase string for if/else statements
var promptNumbersFunc = function() {
  
  promptNumbers = window.prompt("Would you like numbers in your password? Please type YES or NO.");
  
  // make the cancel button work
  if (promptNumbers === null) {
    return;
  }

  // check for correct response; if not correct, then force user to try again
  else if (promptNumbers !== "yes" && promptNumbers !== "no") {
    window.alert("You must choose either yes or no. Please try again.");
    return promptNumbersFunc();
  }

  promptNumbers = promptNumbers.toLowerCase();
  return promptNumbers;

}

// if user wants to use all 4 character types
var fourArrays = function () {
  // check to make sure user selected 'yes' on all four character types
  if (promptLowerCase === "yes" && promptUpperCase === "yes" && promptSpecialChar === "yes" && promptNumbers === "yes" ) {
    
    // use a loop to build password until password length is the same as what user chose
    for (var i = 0; i <= passLength; i++) {

      // provides an equal random chance for any of the four arrays to be chosen
      var chooseArray = Math.random();

      if (chooseArray <= .25){
        // choose which random index is chosen from the array, then add to end of password
        var randomIndexLowercase = randomize(26);
        pass = pass + lowerCase[randomIndexLowercase];
      }

      else if (chooseArray > .25 && chooseArray <= .5) {
        // choose which random index is chosen from the array, then add to end of password
        var randomIndexUppercase = randomize(26);
        pass = pass + upperCase[randomIndexUppercase];
      }

      else if (chooseArray > .5 && chooseArray <= .75) {
        // choose which random index is chosen from the array, then add to end of password
        var randomIndexSpecialChar = randomize(19);
        pass = pass + specialChar[randomIndexSpecialChar]; 
      }

      else {
        // choose which random index is chosen from the array, then add to end of password
        var randomIndexNumbers = randomize(9);
        pass = pass + numbers[randomIndexNumbers];        

      }
    }
  }
}

// if user wants to use 3 character types
var threeArrays = function () {

  // check to make sure user selected 'yes' on three character types, but not numbers
  if (promptLowerCase === "yes" && promptUpperCase === "yes" && promptSpecialChar === "yes" && promptNumbers === "no" ) {
    
    // use a loop to build password until password length is the same as what user chose
    for (var i = 0; i <= passLength; i++) {

      // provides an equal random chance for any of the three arrays to be chosen
      var chooseArray = Math.random();
      
      if (chooseArray <= .33){
        // choose which random index is chosen from the array, then add to end of password
        var randomIndexLowercase = randomize(26);
        pass = pass + lowerCase[randomIndexLowercase];
      }

      else if (chooseArray > .33 && chooseArray <= .66) {
        // choose which random index is chosen from the array, then add to end of password
        var randomIndexUppercase = randomize(26);
        pass = pass + upperCase[randomIndexUppercase];
      }

      else {
        // choose which random index is chosen from the array, then add to end of password
        var randomIndexSpecialChar = randomize(19);
        pass = pass + specialChar[randomIndexSpecialChar];
      }
    }
  }

  // check to make sure user selected 'yes' on three character types, but not special chars
  else if (promptLowerCase === "yes" && promptUpperCase === "yes" && promptSpecialChar === "no" && promptNumbers === "yes" ) {
    
    // use a loop to build password until password length is the same as what user chose
    for (var i = 0; i <= passLength; i++) {
  
      // provides an equal random chance for any of the three arrays to be chosen  
      var chooseArray = Math.random();

      if (chooseArray <= .33){
        // choose which random index is chosen from the array, then add to end of password
        var randomIndexLowercase = randomize(26);
        pass = pass + lowerCase[randomIndexLowercase];
      }
  
      else if (chooseArray > .33 && chooseArray <= .66) {
        // choose which random index is chosen from the array, then add to end of password
        var randomIndexUppercase = randomize(26);
        pass = pass + upperCase[randomIndexUppercase];
      }
  
      else {
        // choose which random index is chosen from the array, then add to end of password
        var randomIndexNumbers = randomize(9);
        pass = pass + numbers[randomIndexNumbers];
      }
    }
  }

  // check to make sure user selected 'yes' on three character types, but not uppercase chars
  else if (promptLowerCase === "yes" && promptUpperCase === "no" && promptSpecialChar === "yes" && promptNumbers === "yes" ) {
    
    // use a loop to build password until password length is the same as what user chose
    for (var i = 0; i <= passLength; i++) {
  
      // provides an equal random chance for any of the three arrays to be chosen
      var chooseArray = Math.random();
  
      if (chooseArray <= .33){
        // choose which random index is chosen from the array, then add to end of password
        var randomIndexLowercase = randomize(26);
        pass = pass + lowerCase[randomIndexLowercase];
      }
  
      else if (chooseArray > .33 && chooseArray <= .66) {
        // choose which random index is chosen from the array, then add to end of password
        var randomIndexSpecialChar = randomize(19);
        pass = pass + specialChar[randomIndexSpecialChar];
      }
  
      else {
        // choose which random index is chosen from the array, then add to end of password
        var randomIndexNumbers = randomize(9);
        pass = pass + numbers[randomIndexNumbers];
      }
    } 
  }

   // check to make sure user selected 'yes' on three character types, but not lowercase chars
   else if (promptLowerCase === "no" && promptUpperCase === "yes" && promptSpecialChar === "yes" && promptNumbers === "yes" ) {
    
    // use a loop to build password until password length is the same as what user chose
    for (var i = 0; i <= passLength; i++) {
  
      // provides an equal random chance for any of the three arrays to be chosen  
      var chooseArray = Math.random();

      if (chooseArray <= .33){
        // choose which random index is chosen from the array, then add to end of password
        var randomIndexUppercase = randomize(26);
        pass = pass + upperCase[randomIndexUppercase];
      }
  
      else if (chooseArray > .33 && chooseArray <= .66) {
        // choose which random index is chosen from the array, then add to end of password
        var randomIndexSpecialChar = randomize(19);
        pass = pass + specialChar[randomIndexSpecialChar];
      }
  
      else {
        // choose which random index is chosen from the array, then add to end of password
        var randomIndexNumbers = randomize(9);
        pass = pass + numbers[randomIndexNumbers];
      }
    }
  }
}

// if user wants to use 2 character types
var twoArrays = function () {

  // check to make sure user selected 'yes' on two character types - lowercase + uppercase
  if (promptLowerCase === "yes" && promptUpperCase === "yes" && promptSpecialChar === "no" && promptNumbers === "no" ) {
    
    // use a loop to build password until password length is the same as what user chose
    for (var i = 0; i <= passLength; i++) {

      // provides an equal random chance for either of the two arrays to be chosen
      var chooseArray = Math.random();

      if (chooseArray <= .5){
        // choose which random index is chosen from the array, then add to end of password
        var randomIndexLowercase = randomize(26);        
        pass = pass + lowerCase[randomIndexLowercase];
      }

      else {
        // choose which random index is chosen from the array, then add to end of password
        var randomIndexUppercase = randomize(26);
        pass = pass + upperCase[randomIndexUppercase];
      }
    }
  }

  // check to make sure user selected 'yes' on two character types - lowercase + special chars
  if (promptLowerCase === "yes" && promptUpperCase === "no" && promptSpecialChar === "yes" && promptNumbers === "no" ) {
    
    // use a loop to build password until password length is the same as what user chose
    for (var i = 0; i <= passLength; i++) {

      // provides an equal random chance for either of the two arrays to be chosen
      var chooseArray = Math.random();

      if (chooseArray <= .5){
        // choose which random index is chosen from the array, then add to end of password
        var randomIndexLowercase = randomize(26);
        pass = pass + lowerCase[randomIndexLowercase];
      }

      else {
        // choose which random index is chosen from the array, then add to end of password
        var randomIndexSpecialChar = randomize(19);
        pass = pass + specialChar[randomIndexSpecialChar];
      }
    }
  }

  // check to make sure user selected 'yes' on two character types - lowercase + numbers
  if (promptLowerCase === "yes" && promptUpperCase === "no" && promptSpecialChar === "no" && promptNumbers === "yes" ) {
    
    // use a loop to build password until password length is the same as what user chose
    for (var i = 0; i <= passLength; i++) {
  
      // provides an equal random chance for either of the two arrays to be chosen
      var chooseArray = Math.random();

      if (chooseArray <= .5){
        // choose which random index is chosen from the array, then add to end of password
        var randomIndexLowercase = randomize(26);
        pass = pass + lowerCase[randomIndexLowercase];
      }
  
      else {
        // choose which random index is chosen from the array, then add to end of password
        var randomIndexNumbers = randomize(9);
        pass = pass + numbers[randomIndexNumbers];
      }
    }
  }

  // check to make sure user selected 'yes' on two character types + uppercase + numbers
  if (promptLowerCase === "no" && promptUpperCase === "yes" && promptSpecialChar === "no" && promptNumbers === "yes" ) {
    
    // use a loop to build password until password length is the same as what user chose
    for (var i = 0; i <= passLength; i++) {

      // provides an equal random chance for either of the two arrays to be chosen
      var chooseArray = Math.random();

      if (chooseArray <= .5){
        // choose which random index is chosen from the array, then add to end of password
        var randomIndexUppercase = randomize(26);
        pass = pass + upperCase[randomIndexUppercase];
      }

      else {
        // choose which random index is chosen from the array, then add to end of password
        var randomIndexNumbers = randomize(9);
        pass = pass + numbers[randomIndexNumbers];
      }
    }
  }

  // check to make sure user selected 'yes' on two character types - uppercase + special chars
  if (promptLowerCase === "no" && promptUpperCase === "yes" && promptSpecialChar === "yes" && promptNumbers === "no" ) {
    
    // use a loop to build password until password length is the same as what user chose
    for (var i = 0; i <= passLength; i++) {
  
      // provides an equal random chance for either of the two arrays to be chosen
      var chooseArray = Math.random();
  
      if (chooseArray <= .5){
        // choose which random index is chosen from the array, then add to end of password
        var randomIndexUppercase = randomize(26);
        pass = pass + upperCase[randomIndexUppercase];      }
  
      else {
        // choose which random index is chosen from the array, then add to end of password
        var randomIndexSpecialChar = randomize(19);
        pass = pass + specialChar[randomIndexSpecialChar];
      }
    }
  }

  // check to make sure user selected 'yes' on two character types - special chars + number
  if (promptLowerCase === "no" && promptUpperCase === "no" && promptSpecialChar === "yes" && promptNumbers === "yes" ) {
    
    // use a loop to build password until password length is the same as what user chose
    for (var i = 0; i <= passLength; i++) {

      // provides an equal random chance for either of the two arrays to be chosen
      var chooseArray = Math.random();

      if (chooseArray <= .5){
        // choose which random index is chosen from the array, then add to end of password
        var randomIndexSpecialChar = randomize(19);
        pass = pass + specialChar[randomIndexSpecialChar];
      }

      else {
        // choose which random index is chosen from the array, then add to end of password
        var randomIndexNumbers = randomize(9);
        pass = pass + numbers[randomIndexNumbers];
      }
    }
  }
}

// if user wants to use a single character type
var singleArray = function () {

  // check to make sure user selected 'yes' on a single character type - lowercase
  if (promptLowerCase === "yes" && promptUpperCase === "no" && promptSpecialChar === "no" && promptNumbers === "no" ) {
    
    // use a loop to build password until password length is the same as what user chose
    for (var i = 0; i <= passLength; i++) {

      // randomizes which index (character) is chosen for the chosen character type & add it to the end of the growing password
      var randomIndexLowerCase = randomize(26);
      pass = pass + lowerCase[randomIndexLowercase];
    }
  }

  // check to make sure user selected 'yes' on a single character type - uppercase
  if (promptLowerCase === "no" && promptUpperCase === "yes" && promptSpecialChar === "no" && promptNumbers === "no" ) {
    
    // use a loop to build password until password length is the same as what user chose
    for (var i = 0; i <= passLength; i++) {

      // randomizes which index (character) is chosen for the chosen character type & add it to the end of the growing password
      var randomIndexUpperCase = randomize(26);
      pass = pass + upperCase[randomIndexUpperCase];
    }
  }

  // check to make sure user selected 'yes' on a single character type - special chars
  if (promptLowerCase === "no" && promptUpperCase === "no" && promptSpecialChar === "yes" && promptNumbers === "no" ) {
    
    // use a loop to build password until password length is the same as what user chose
    for (var i = 0; i <= passLength; i++) {

      // randomizes which index (character) is chosen for the chosen character type & add it to the end of the growing password
      var randomIndexSpecialChar = randomize(19);
      pass = pass + specialChar[randomIndexSpecialChar];   
    }
  }

  // check to make sure user selected 'yes' on a single character type - numbers
  if (promptLowerCase === "no" && promptUpperCase === "no" && promptSpecialChar === "no" && promptNumbers === "yes" ) {
    
    // use a loop to build password until password length is the same as what user chose
    for (var i = 0; i <= passLength; i++) {

      // randomizes which index (character) is chosen for the chosen character type & add it to the end of the growing password
      var randomIndexNumbers = randomize(9);
      pass = pass + numbers[randomIndexNumbers];    
    }
  }

}

// checks user response for desired characters and runs through functions to build password or catches incorrect responses and restarts password generator
var checkArrays = function () {

  fourArrays();
  threeArrays();
  twoArrays();
  singleArray();
 
}

// main function to generate password
var generatePassword = function (){

  // prompt user to choose their desired password length
  choosePassLength();

  // retrieve user input about which chars to use and catch erroneous responses, then force user to try again for a correct response
  promptLowerCase = promptLowerCaseFunc();
  
  promptUpperCase = promptUpperCaseFunc();

  promptSpecialChar = promptSpecialCharFunc();

  promptNumbers = promptNumbersFunc();

    // check to see if the users desired password length is between 8 and 128 characters
    if (passLength >=8 && passLength <= 128) {

      // check the responses of the user for each character type & run through each function until correct matching statements are found

      checkArrays();

      return pass;
    }

      // make the cancel button work
      if (passLength === null) {
        return;
      }

    // if user enters a number not b/w 8 and 128, notify of error, and restart function
    else {

      window.alert("You need to choose between 8 and 128 characters for your password. Please try again.");

      return generatePassword ();

    }

  writePassword();

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