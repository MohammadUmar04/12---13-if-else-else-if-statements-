//question no 5

// Input number
var userInput = prompt("Enter a number:");

// Convert input to a number
var number = parseInt(userInput);

// Calculate the remainder when divided by 3
var remainder = number % 3;

// Use a switch statement to check the remainder
switch (remainder) {
        case 0:
        document.write("Number is divisible by 3");
        break;
    default:
        document.write("Number is not divisible by 3");
}
