// // question no 19

// Prompt the user for the number of a month
var monthNumber = prompt("Enter the number of a month (1-12):");

// Convert the input to an integer
monthNumber = parseInt(monthNumber);

// Use a switch statement to display the name of the month
switch (monthNumber) {
  case 1:
    document.write("January");
    break;
  case 2:
    document.write("February");
    break;
  case 3:
    document.write("March");
    break;
  case 4:
    document.write("April");
    break;
  case 5:
    document.write("May");
    break;
  case 6:
    document.write("June");
    break;
  case 7:
    document.write("July");
    break;
  case 8:
    document.write("August");
    break;
  case 9:
    document.write("September");
    break;
  case 10:
    document.write("October");
    break;
  case 11:
    document.write("November");
    break;
  case 12:
    document.write("December");
    break;
  default:
    document.write("Invalid month number. Please enter a number between 1 and 12.")}