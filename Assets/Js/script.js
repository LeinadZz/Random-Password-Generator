// This is what the computer will choose from.
const Pass = {
    upperCase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    lowerCase: "abcdefghijklmnopqrstuvwxyz",
    number: "0123456789",
    symbol: "!@#$%^&*()-_=+[{}]|<>?/",
}
// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
function generatePassword() {
    var passwordSet = "";
    
    var length = prompt("Please choose the length of your password with a minimum of 8 characters and maximum of 128 characters.")
    if (length < 8 | length > 128) {
        alert("Please choose a number between 8 and 128.");
        return;
    }

    var upperCase = confirm("Would you like to add uppercase letters?");
    if (upperCase) {
        passwordSet += Pass.upperCase;
    };
    var lowerCase = confirm("Would you like to add lowercase letters?");
    if (lowerCase) {
        passwordSet += Pass.lowerCase
    }
    var number = confirm("Would you like to add numbers?");
    if(number) {
        passwordSet += Pass.number
    }
    var symbol = confirm("Would you like to add symbols?");
    if (symbol) {
        passwordSet += Pass.symbol
    }

    var password = "";
    for (let i = 0; i < length; i++) {
        password += passwordSet[Math.floor(Math.random() * passwordSet.length)]
    }
    return password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
