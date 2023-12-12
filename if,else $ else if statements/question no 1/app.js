//question no 1

function isDivisibleBy3(number) {
    return number % 3 === 0;
}

// Input number
var userInput = prompt("Enter a number:");

// Convert input to a number
var number = parseInt(userInput);

// Check if the number is divisible by 3
if (isDivisibleBy3(number)) {
    document.write(number + " is divisible by 3");
} else {
    document.write(number + " is not divisible by 3");
}
