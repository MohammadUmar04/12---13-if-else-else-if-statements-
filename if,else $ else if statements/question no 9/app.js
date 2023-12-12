//question no 9

// Function to check if a year is a leap year
function isLeapYear(year) {
    // Leap years are divisible by 4
    // Exception: Years divisible by 100 are not leap years unless they are also divisible by 400
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}

// Function to notify the user about leap year status
function notifyLeapYear(year) {
    if (isLeapYear(year)) {
        document.write(year + " is a leap year!");
    } else {
        document.write(year + " is not a leap year.");
    }
}

// Example: You can replace 2023 with any year you want to check
let inputYear = 2023;

// Check and notify the user
notifyLeapYear(inputYear);
