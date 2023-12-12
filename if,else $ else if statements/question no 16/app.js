//question no 16
// Prompt the user to enter a value
const userValue = prompt("Enter a value:");

// Determine the type of the variable
const valueType = typeof userValue;

// Print the type of the variable
if (valueType === "number") {
  document.write("The type of the variable is: number");
} else if (valueType === "string") {
  document.write("The type of the variable is: string");
} else if (valueType === "boolean") {
  document.write("The type of the variable is: boolean");
} 
 else if (valueType === "undefined") {
    document.write("The type of the variable is: undefined");
  } else {
    document.write("The type of the variable is not number, string, boolean, or undefined.");
  }
