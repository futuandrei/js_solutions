// Develop a program that outputs all even, positive numbers less than 100 in the following pattern: 2, 98, 4, 96, 6, 94, and so on, up to the last number before 100. Display the result in a single line.

// for (let i = 2; i < 100; i += 2) {
//     console.log(i)
// }

let i = 2;
while (i < 100) {
    console.log(i);
    console.log(i - 100);
    i += 2;
}