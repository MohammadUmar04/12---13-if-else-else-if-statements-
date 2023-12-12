//question no 7

function calculator(number1, number2, operator) {
    let result;

    switch (operator) {
        case '+':
            result = number1 + number2;
            break;
        case '-':
            result = number1 - number2;
            break;
        case '*':
            result = number1 * number2;
            break;
        case '/':
            if (number2 !== 0) {
                result = number1 / number2;
            } else {
                console.log("Error: Division by zero is not allowed.");
                return;
            }
            break;
        case '%':
            result = number1 % number2;
            break;
        default:
            console.log("Error: Invalid operator.");
            return;
    }

    console.log(`Result: ${number1} ${operator} ${number2} = ${result}`);
}

// Example usage:
let num1 = parseFloat(prompt("Enter the first number:"));
let num2 = parseFloat(prompt("Enter the second number:"));
let op = prompt("Enter the operator (+, -, *, /, %):");

calculator(num1, num2, op);
