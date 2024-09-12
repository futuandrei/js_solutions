// method creates a new array filled with elements that pass a test provided by a function.

// w3schools
// Example 1

const ages = [32, 33, 16, 40];

// # Solution A
// const result = ages.filter(checkAdult); // pass [array] with filter method to function
// // filter will check for 
// function checkAdult(age) {
//     return age >= 18;
// }
// console.log(result);

// # Solution B-1 (arrow func)
// function checkAdult(ages) {
//     return ages.filter(age => age >= 18);
// }

// # Solution B-2
function checkAdult(ages) {
    return ages.filter(function (age) { return age >= 18; });
}

console.log(checkAdult(ages));

// Example 2
// const ages = [32, 33, 16, 40];

// function checkAdult(age) {
//     return age >= 18;
// }