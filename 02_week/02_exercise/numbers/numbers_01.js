// Complete the function convertNumberToString such that it converts the number it receives into a string.
// Complete the function convertStringToNumber such that it converts the string it receives into a number.

function convertNumberToString(number) {
    // console.log(number.toString());
    return number.toString();
}

function convertStringToNumber(string) {
    // console.log(parseInt(string));
    return parseInt(string);

}


// Sample usage - do not modify
console.log(convertNumberToString(42)); // "42"
console.log(convertNumberToString(97)); // "97"
console.log(convertNumberToString(11)); // "11"

console.log(convertStringToNumber('42')); // 42
console.log(convertStringToNumber('97')); // 97
console.log(convertStringToNumber('11')); // 11

// convertNumberToString(20);
// convertStringToNumber("123");