// Initial array of team members
let teamMembers = ['John', 'Emily', 'Mike', 'Sarah'];

// ******************
// Exercise 1: Loop through `teamMembers` and log each name to the console.
// Write your code here:

// forEach
// teamMembers.forEach(element => {
//     console.log(element);

// for loop
// for (i = 0; i < teamMembers.length; i++) {
//     console.log(teamMembers[i]);
// }

// for (user = 0; user < teamMembers.length; user++) {
//     console.log(teamMembers[user]);
// }

// ******************
// Exercise 2: Remove the first member of the array.
// Write your code here:

// teamMembers.splice(0, 1); // (index 0 = Johan, count 1 = removes John)
// console.log(teamMembers); // -> ['Emily', 'Mike', 'Sarah'];

// ******************
// Exercise 3: Remove the last member of the array.
// Write your code here:

// teamMembers.pop();
// console.log(teamMembers); // -> ['John', 'Emily', 'Mike'];

// ******************
// Exercise 4: Add a new member "Alex" to the front of the array.
// Write your code here:

// teamMembers.splice(0, 0, 'Alex');
// console.log(teamMembers);

// ******************
// Exercise 5: Append a new member "Linda" to the end of the array.
// Write your code here:

// teamMembers.push('Linda');
// console.log(teamMembers);

// ******************
// Exercise 6: Create a new array that excludes the first two members.
// Write your code here:

// teamMembers.splice(0, 2);
// console.log(teamMembers); // -> ['Mike', 'Sarah'];

// ******************
// Exercise 7: Find the index of "Mike" in the array.
// Write your code here:

// 1.
// let index = teamMembers.indexOf('Mike');
// console.log(index); // -> 2

// 2. With findIndex
// const findName = function (element) {
//     return element == 'Mike';
// }
// // const findName = (element) => element == 'Mike';
// console.log(teamMembers.findIndex(findName));

// 3. With for loop
// for (let i = 0; i < teamMembers.length; i++) {
//     if (teamMembers[i] == 'Mike') {
//         console.log(i);
//         break;
//     }
// }

// 3. With for loop and return 

// function findMikeIndex() {
//     for (let i = 0; i < teamMembers.length; i++) {
//         if (teamMembers[i] === 'Mike') {
//             return i;
//         }
//     }
//     return -1; // Explicitly return -1 when 'Mike' is not found
// }

// console.log(findMikeIndex(teamMembers));

// ******************
// Exercise 8: Try to find the index of "Jake" (who is not in the array).
// Write your code here:

// Regular function
// const findName = function (element) {
//     return element == 'Mike';
// }
// Arrow function
// const findName = (element) => element == 'Mike';
// console.log(teamMembers.findIndex(findName));


// Exercise 9: Use `splice` to remove "Mike" and add "Carol" and "Bruce" in his place.
// Write your code here:

// teamMembers.splice(2, 1, 'Carol', 'Bruce');
// console.log(teamMembers); // -> [ 'John', 'Emily', 'Carol', 'Bruce', 'Sarah']

// Exercise 10: Concatenate a new member "Bob" to the end of the array and create a new array.
// Write your code here:

// const newArr = teamMembers.concat('Bob');
// console.log(newArr); // -> [ 'John', 'Emily', 'Mike', 'Sarah', 'Bob' ]

// Exercise 11: Using `slice` to Copy the Entire Array
// Write your code here:

// const newArr = teamMembers.slice(0);
// console.log(newArr);

// Exercise 12: Combining Arrays with `concat`
// Assume `newMembers` array is defined
// let newMembers = ['Tina', 'Dean'];

// Write your code here:
// const arrayFromConcat = teamMembers.concat(newMembers);
// console.log(arrayFromConcat);

// Exercise 13: Finding all occurrences of a John
// Write your cod

// # solution 1
// const findName = function (element) {
//     if (element == 'Mike')
//         return element[i];
// }
// console.log(teamMembers.find(findName));

// # solution 2
// const findName = teamMembers.find((element) => element == 'Mike');
// console.log(findName);

// # solution 3: indexOf
// const findName = teamMembers.indexOf((element) => element == 'Mike');
// const index = teamMembers.indexOf('Mike');
// console.log(index);

// # solution 4: find + indexOf
// function findName() {
//     let name = teamMembers.find((element) => element == 'Mike');
//     let index = teamMembers.indexOf('Mike');
//     return name + ' ' + index;
// }
// console.log(findName());


// Exercise 14: Transforming members with `map` to be all written uppercase
// Write your code here:

// # Regular function (function does not have name)
let upperCaseTeamMembers = teamMembers.map(function (member) {
    return member.toUpperCase();
})

//# Arrow function
// let upperCaseTeamMembers = teamMembers.map(member => member.toUpperCase());

// console.log(upperCaseTeamMembers);