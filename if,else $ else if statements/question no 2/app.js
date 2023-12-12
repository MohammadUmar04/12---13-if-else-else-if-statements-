//question no 2

function isDivisibleBy2(number) {
    return number % 2 === 0;
}

// Input number
var userInput = prompt("Enter a number:");

// Convert input to a number
var number = parseInt(userInput);

// Check if the number is divisible by 3
if (isDivisibleBy2(number)) {
    document.write(number + " is even number");
} else {
    document.write(number + " is not a even number");
}
