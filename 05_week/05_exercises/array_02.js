// ***************************************************
// ***************************************************
// Exerice 1: Determine array length and conditional check
// ***************************************************
// ***************************************************

let myAlphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];
/*
Create a function called myAlphabetLength to log the length of the array.
Also include an if-statement to check if the array length is less than 5.
Expected outcome: 
"The length of myAlphabet: 7"
"Array length is greater than or equal to 5."
*/
// Write your function here

// # Regular function
// function myAlphabetLength(array) {
//     // console.log("received", array);
//     let length = array.length;
//     console.log(length);
// }
// myAlphabetLength(myAlphabet);


//# Arrow function
// myAlphabetLength = (array) => console.log(array.length);
// myAlphabetLength(myAlphabet);

// ***************************************************
// ***************************************************
// Exerice 2: Iterate over array and log each item with its index
// ***************************************************
// ***************************************************

const planets = ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter'];
/*
Log each planet in the array along with its index.
Expected outcomes:
"Planet: Mercury, Index: 0"
...
"Planet: Jupiter, Index: 4"
*/

// Write your code here

// ***************************************************
// # Approach 1

// for (let i = 0; i < planets.length; i++) {
//     console.log(i + " " + planets[i]);
// }

// ***************************************************
// # Approach with template literals

// for (let i = 0; i < planets.length; i++) {
//     console.log(`Index: ${i}, Item: ${planets[i]}`);
// }

// ***************************************************
// # Approach with functions

// function checkPlanets(array) {
//     for (let i = 0; i < array.length; i++) {
//         console.log(i + " " + array[i]);
//         // let indexAndName = (i + " " + array[i]);
//         // return indexAndName;
//     }
// }
// checkPlanets(planets);

// # Attempt
// function getPlanetsWithIndexes() {
//     let result = []; // Array to store the index and value pairs
//     for (let i = 0; i < planets.length; i++) {
//         result.push(i + " " + planets[i]);
//         // result.push(`Index: ${i}, Planet: ${planets[i]}`);
//         // console.log(i + " " + planets[i]);
//         // console.log(result);
//         // console.log(checkedPlanets);
//     }
//     // console.log(result);
//     return result;
// }
// console.log(getPlanetsWithIndexes());

// ***************************************************
// ***************************************************
// Exerice 3: Log array items with their types
// ***************************************************
// ***************************************************

const wowDatatypes = [1, 'text', false, null, undefined];
/*
Iterate over the array, logging each item, its index, and data type.
Expected outcomes:
"Item: 1, Index: 0, Type: number"
...
"Item: undefined, Index: 4, Type: undefined"
*/
// Write your code here

// function iterateArray(array) {
//     for (let i = 0; i < array.length; i++) {
//         // template literals
//         console.log(`Item: ${array[i]}, Index: ${array.indexOf(array[i])}, Data type: ${typeof (array[i])}`)
//     }
// }

// iterateArray(wowDatatypes);

// ***************************************************
// ***************************************************
// Exerice 4: Log array items without using a loop
// ***************************************************
// ***************************************************
let myArr = [1, 2, 'One', true];
/*
Log each item in this array without explicitly using a loop.
Expected outcomes: 1, 2, "One", true
*/
// Write your code here

// forEach method
// myArr.forEach(i => console.log(i));

// function with no name
// myArr.forEach(function (i) { console.log(i) });


// ***************************************************
// ***************************************************
// Exerice 5: Find common courses between two students
// ***************************************************
// ***************************************************

let student1Courses = ['Math', 'English', 'Programming'];
let student2Courses = ['Geography', 'Spanish', 'Programming'];
/*
Identify and log any courses common to both student1Courses and student2Courses.
Expected outcome: "Common course: Programming"
*/
// Write your code here

let allCourses = student1Courses.concat(student2Courses);

// ***************************************************
// # Approach with loops

// function removeDuplicates(arr) {
//     let uniqueArr = []; // Array to store unique values

//     for (let i = 0; i < arr.length; i++) {
//         // check if element is not already in uniqueArr
//         if (uniqueArr.indexOf(arr[i]) === -1) { // -1 means it is not found!
//             uniqueArr.push(arr[i]);
//         }
//     }
//     return uniqueArr;
// }


// console.log(removeDuplicates(allCourses));

// ***************************************************
// # Approach with filters

// function removeDuplicates(arr) {
//     return arr.filter(function (item, index) {
//         (console.log(index));
//         (console.log(item));
//         return arr.indexOf(item) === index;
//     });
// }

// # With arrow function
// function removeDuplicates(arr) {
//     return arr.filter((item, index) => arr.indexOf(item) === index);
// }

// console.log(removeDuplicates(allCourses));

// ***************************************************
// # Approach with set

// let uniqueValues = [...new Set(allCourses)];
// console.log(uniqueValues);

// ***************************************************
// ***************************************************
// Exerice 6: Log each letter of array items
// ***************************************************
// ***************************************************

let furniture = ['Table', 'Chairs', 'Couch'];

/*
For each item in the furniture array, log every letter.
Expected outcomes:
"Letters in 'Table': T, a, b, l, e"
...
"Letters in 'Couch': C, o, u, c, h"
*/
// Write your code here

// function logLetters(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         let letters = arr[i].split('').join(', ');
//         console.log("Letters in " + arr[i] + ": " + letters);
//     }
// }

// console.log(logLetters(furniture));

// ***************************************************
// ***************************************************
// Exerice 7: Filter positive temperatures
// ***************************************************
// ***************************************************

let temperatures = [-5, 3, -1, 22, -40, 5, 18];
/*
Write the function getPositiveTemperatures such that it returns an array containing the positive temperatures (the temperatures that are above 0).
Expected outcome: [3, 22, 5, 18]
*/
// Write your code here

// const result = temperatures.filter(checkPositive);
// // method creates a new array filled with elements that pass a test provided by a function.

// function checkPositive(num) {
//     return (num > 0);
// }
// console.log(result);


// ***************************************************
// ***************************************************
// Exerice 8: Filter Odd Years
// ***************************************************
// ***************************************************
/*
Complete the function getOddYears such that it returns all the years that are odd from the years parameter it receives.
Expected outcomes:
getOddYears([2019, 2020, 2021]) -> [2019, 2021]
getOddYears([2000, 2015, 2018, 2020]) -> [2015]
*/


// Write your code here

// # Solution with for loop 
// function getOddYears(years) {
//     let oddYears = [];
//     for (let i = 0; i < years.length; i++) {
//         if ((years[i] % 2 !== 0)) {
//             oddYears.push(years[i]);
//         }
//     }
//     return oddYears;
// }
// # Solution with filter
function getOddYears(years) {
    return years.filter(function (year) { return year % 2 !== 0; });

}


// Sample usage - Uncomment to test your function
// console.log(getOddYears([2019, 2020, 2021])); // [2019, 2021]
console.log(getOddYears([2000, 2015, 2018, 2020])); // [2015]