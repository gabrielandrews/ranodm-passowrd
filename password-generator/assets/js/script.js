const number = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const character = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", ">", "=", "?", "@", "[", "]", "^", "_", "`", "{", "}", "|", "~", String.fromCharCode(34), String.fromCharCode(92)];
const lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
// at lease one option is selected
var firstResponse = function (responses) {
    if (responses.lowerCase || responses.upperCase || responses.number || responses.specialCharacter) {
        return true;
    }
    else {
        return false;
    }
}
// generate password 
function generatePassword() {
    var responses = {
        lowerCase: false,
        upperCase: false,
        number: false,
        specialChar: false
    }
    const min = 8;
    const max = 128;
    var password = "";
    var all = [];
    var pLen = 0;
    var Left = 0;
    // loop until selected
    while (!firstResponse(responses)) {
        while (pLen < min || pLen > max) {
            pLen = prompt("How many characters do you want for your password?  Enter a number from 8 to 128.", "8");
            Left = pLen;
        }
        if (confirm("Would you like your password to include lowercase letters?")) {
            responses.lowerCase = true;
        }
        if (confirm("Would you like your password to include uppercase letters?")) {
            responses.upperCase = true;
        }
        if (confirm("Would you like your password to include numbers?")) {
            responses.number = true;
        }
        if (confirm("Would you like your password to include special characters?")) {
            responses.specialCharacter = true;
        }
    }
    if (responses.lowerCase) {
        password = lowercase[Math.floor(Math.random() * lowercase.length)];
        all.push(...lowercase);
        Left--;
    }
    if (responses.upperCase) {
        password += uppercase[Math.floor(Math.random() * uppercase.length)];
        all.push(...uppercase);
        Left--;
    }
    if (responses.number) {
        password += number[Math.floor(Math.random() * number.length)];
        all.push(...number);
        Left--;
    }
    if (responses.specialCharacter) {
        password += character[Math.floor(Math.random() * character.length)];
        all.push(...character);
        Left--;
    }
    for (var i = 0; i < Left; i++) {
        passwordRandom = all[Math.floor(Math.random() * all.length)];
        password += passwordRandom;
    }

    return password;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate")

// Write password to the #password input
function writePassword() {
    let password = generatePassword()
    var passwordText = document.querySelector("#password")

    passwordText.value = password

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);