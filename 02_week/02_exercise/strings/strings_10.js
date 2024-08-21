/**
Refine the capitalize function to ensure it capitalizes the first letter of the name parameter provided to it.
 */

function capitalize(word) {
    firstChar = word.charAt(0); //first character
    restChar = word.substring(1); //rest of characters
    firstCharUpperCase = firstChar.toUpperCase(); //converting first character to upper case
    return firstCharUpperCase + restChar; //returning both, first and rest of characters combined.
}

// Sample usage - do not modify
console.log(capitalize('sam')); // "Sam"
console.log(capitalize('ALEX')); // "Alex"
console.log(capitalize('chARLie')); // "Charlie"
