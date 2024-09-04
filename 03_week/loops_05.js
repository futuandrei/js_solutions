// Develop a program that continuously prompts the user to input numbers until the user enters 0, at which point the program terminates. After termination, the program should calculate and display the average of all the entered numbers.

// ###################################
// ###################################
// ##### Solution with do while ######
// ###################################
// ###################################

// function askNumber() {
//     let yourNumber;
//     do {
//         yourNumber = prompt("Input number");
//     } while (yourNumber != 0);
//     console.log(yourNumber);
// }

// askNumber();

// let yourNumber;
// do {
//     yourNumber = prompt("Input number");
// } while (yourNumber != 0);
// console.log(yourNumber);

// ###################################
// ###################################
// ####### Solution with while #######
// ###################################
// ###################################



// function askNumber() {
//     let yourNumber;
//     while (yourNumber != 0) {
//         yourNumber = prompt("Input number");
//     }
// }

// askNumber();

// ``````````````````````````````````````````````````````
// ``````````````````````````````````````````````````````
// `````````````````` Teacher's Solution ````````````````
// ``````````````````````````````````````````````````````
// ``````````````````````````````````````````````````````

// Not working!!! >>> Check solution!!!

function calcAverage() {
    let sum = 0;
    let count = 0;

    do {
        let input = +prompt('Enter number (enter zero to terminate):');
        if (input !== 0) {
            sum += input;
            count += 1;
        }
    } while (input !== 0);
    let average = sum / count;

    console.log(average);

}

calcAverage();
