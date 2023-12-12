//question no 17

// Accept two integers from the user
const firstNumber = parseInt(prompt("Enter the first integer:"));
const secondNumber = parseInt(prompt("Enter the second integer:"));

// Check if the inputs are valid integers
if (!isNaN(firstNumber) && !isNaN(secondNumber)) {
  // Compare the two integers
  if (firstNumber > secondNumber) {
    document.write(`The larger integer is: ${firstNumber}`);
  } else if (secondNumber > firstNumber) {
    document.write(`The larger integer is: ${secondNumber}`);
  } else {
    document.write("The two integers are equal.");
  }
} else {
  document.write("Invalid input. Please enter valid integers.");
}
