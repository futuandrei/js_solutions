// Define a function to convert a temperature from Fahrenheit to Celsius.
// This function uses the formula (Fahrenheit - 32) * 5/9
// The resulting temperature is rounded to one decimal place for precision.


// Sample usage - do not modify
// console.log(fahrenheitToCelsius(21)); // "-6,1"

function fahrenheitToCelsius(degrees) {
    // console.log((degrees - 32) * 5/9);
    return ((degrees - 32) * 5 / 9).toFixed(1)
}
// 

console.log(fahrenheitToCelsius(90));