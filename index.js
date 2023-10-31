// const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
// "/"];
const characters = []

//element
const generatePwBtn = document.getElementById("generatePwBtn");
const firstPwEl = document.getElementById("firstPw-el");
const secondPwEl = document.getElementById("secondPw-el");
const lengthInputEl = document.getElementById("lengthInput")
const characterCheckbox = document.getElementById("character");
const numberCheckbox = document.getElementById("number");
const symbolCheckbox = document.getElementById("symbol");

//display generated password
generatePwBtn.addEventListener("click", function generatePassword() {
    firstPwEl.textContent = randomPassword();
    secondPwEl.textContent = randomPassword();
});


// function randomPassword() {
//     let length;
//     if (lengthInputEl.value === ""){
//         length = 15 //default if user not input the password length
//     } else {
//         length = parseInt(lengthInputEl.value) //if user input the password length
//     }
    
//     let password = "";
//     for (let i = 0; i < length; i++) {
//         let randomChar = Math.floor(Math.random() * characters.length);
//         password += characters[randomChar]
//     }
//     return password;
// }
function randomPassword() {
    let length;
    if (lengthInputEl.value === "") {
        length = 15; // Default if the user does not input the password length
    } else {
        length = parseInt(lengthInputEl.value); // If the user inputs the password length
    }

    let selectedCharacters = "";

    if (characterCheckbox.checked) {
        selectedCharacters += "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    }
    if (numberCheckbox.checked) {
        selectedCharacters += "0123456789";
    }
    if (symbolCheckbox.checked) {
        selectedCharacters += "~`!@#$%^&*()_-+={[]}|:;<>,.?/";
    }

    if (selectedCharacters.length === 0) {
        return "Please select at least one character option.";
    }

    let password = "";
    for (let i = 0; i < length; i++) {
        let randomIndex = Math.floor(Math.random() * selectedCharacters.length);
        password += selectedCharacters[randomIndex];
    }
    return password;
}



