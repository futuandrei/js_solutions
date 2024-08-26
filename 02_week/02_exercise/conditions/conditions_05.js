/**
Write a function named gradeChecker that takes a number (representing a student's grade) as a parameter and returns a grade classification as follows:

"A" for grades 90 and above
"B" for grades 80-89
"C" for grades 70-79
"D" for grades 60-69
"F" for grades below 60
*/


function gradeChecker(number) {

    if (number >= 90 && number <= 100) { //more than 90 and less than 100
        return "A"
    }
    else if (number >= 80 && number < 90) { //more than 90 and less than 100
        return "B"
    }
    else if (number >= 70 && number < 80) {
        return "C"
    }
    else if (number >= 60 && number < 70) {
        return "D"
    }
    else if (number >= 0 && number < 60) {
        return "F"
    }
}

// Sample usage - do not modify
console.log(gradeChecker(95)); // Outputs: "A"
console.log(gradeChecker(85)); // Outputs: "B"
console.log(gradeChecker(75)); // Outputs: "C"
console.log(gradeChecker(65)); // Outputs: "D"
console.log(gradeChecker(55)); // Outputs: "F"
