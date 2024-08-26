/* Write a function named getDayName that takes a number (1-7) as a parameter and returns the corresponding day of the week (1 for Monday, 2 for Tuesday, etc.). If the number is out of range, return "Invalid day". */

function getDayName(number) {
    if (number <= 0 || number > 7 || isNaN) {
        return "Invalid day"
    } else if (number === 1) {
        return "Monday"
    } else if (number === 2) {
        return "Tuesday"
    } else if (number === 3) {
        return "Wednesday"
    } else if (number === 4) {
        return "Thursday"
    } else if (number === 5) {
        return "Friday"
    }

}

// Sample usage - do not modify
console.log(getDayName(1));  // Outputs: "Monday"
console.log(getDayName(4));  // Outputs: "Thursday"
console.log(getDayName(8));  // Outputs: "Invalid day"
