//question no 14

let userinput = prompt(`enter a number`);
let number = parseFloat(userinput);
if (isNaN(number)){
    document.write("Invalid input. Please enter a valid number.");
    if (number > 0) {
        document.write("The entered number is positive.");
    } else if (number < 0) {
        document.write("The entered number is negative.");
    } else {
        document.write("The entered number is zero.");
    }
}

