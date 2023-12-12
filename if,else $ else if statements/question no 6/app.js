//question no 6

function checkCharacterType(input) {
    // Check if the input is a number
    if (!isNaN(input)) {
        document.write(`${input} is a number.`);
    }
    // Check if the input is an uppercase letter
    else if (input.charCodeAt(0) >= 65 && input.charCodeAt(0) <= 90) {
        document.write(`${input} is an uppercase letter.`);
    }
    // Check if the input is a lowercase letter
    else if (input.charCodeAt(0) >= 97 && input.charCodeAt(0) <= 122) {
        document.write(`${input} is a lowercase letter.`);
    }
    // If none of the above conditions are met, it's an invalid input
    else {
        document.write(`${input} is not a valid character.`);
    }
}

// Example usage:
let userInput = prompt("Enter a character (number or string):");
checkCharacterType(userInput);
