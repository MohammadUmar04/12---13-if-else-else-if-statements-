function isVowel(char) {
    // Convert the input character to lowercase for case-insensitivity
    char = char.toLowerCase();

    // Check if the character is a vowel
    return ['a', 'e', 'i', 'o', 'u'].includes(char);
}

// Example usage:
var userInput = prompt("Enter a character:"); // You can replace this with any method of getting user input
if (userInput.length === 1) {
    var result = isVowel(userInput);
    document.write(result);
} else {
    document.write("Please enter a single character.");
}
