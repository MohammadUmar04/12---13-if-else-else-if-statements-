//question no 10

// Step a: Store correct password in a JS variable
const correctPassword = "umar123";

// Step b: Ask user to enter his/her password
const userEnteredPassword = prompt("Enter your password:");

// Step c: Validate the two passwords
if (!userEnteredPassword) {
  // i. Check if user has entered a password
  document.write("Please enter your password");
} else if (userEnteredPassword === correctPassword) {
  // ii. Check if both passwords are the same
  document.write("Correct! The password you entered matches the original password");
} else {
    document.write("Incorrect password");
}

