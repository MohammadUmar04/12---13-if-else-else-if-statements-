//question no 8

function convertTo12HourFormat(time24) {
    // Check if the input is a valid 24-hour time
    if (time24 < 0 || time24 > 2359 || isNaN(time24)) {
        document.write("Invalid input. Please enter a valid 24-hour time.");
        return;
    }

    // Extract hours and minutes
    let hours = Math.floor(time24 / 100);
    let minutes = time24 % 100;

    // Convert to 12-hour format
    let period = (hours >= 12) ? "pm" : "am";
    hours = (hours > 12) ? hours - 12 : hours;
    hours = (hours === 0) ? 12 : hours;

    // Display the result
    document.write(`Converted time: ${hours}:${minutes < 10 ? '0' : ''}${minutes} ${period}`);
}

// Example usage:
let userInput = parseInt(prompt("Enter time in 24-hour format (e.g., 1900):"));
convertTo12HourFormat(userInput);
