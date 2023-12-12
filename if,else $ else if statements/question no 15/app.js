//question no 15
// Get the current date and time
const now = NewDate();

// Get the current hour in 24-hour format
const currentHour = now.getHours();

// Check the current hour and provide the appropriate message
if (currentHour >= 6 && currentHour < 9) {
  document.write("Breakfast is served.");
} else if (currentHour >= 11 && currentHour < 13) {
  document.write("Time for lunch.");
} else if (currentHour >= 17 && currentHour < 20) {
  document.write("It's dinner time.");
} else {
  document.write("Sorry, you'll have to wait, or go get a snack.");
}
