// Develop a program that requests the user to input 20 numbers. After all numbers are entered, the program should display how many of these numbers are even. Do not use array.

// ###################################
// ###################################
// ##### Solution with an Array ######
// ######## displays numbers! ########
// ###################################
// ############# Works! ##############

// function askNumber() {
//     let i = 0;
//     const evenNumbers = [];
//     let number;
//     while (i < 5) {
//         number = prompt("Enter the number :");
//         console.log(number);
//         i++;
//         if (number % 2 === 0) {
//             evenNumbers.push(number);
//         }
//     }

//     console.log("Even numbers are: ", evenNumbers);
// }

// askNumber();

// ###################################
// ###################################
// ##### Solution (no Array) ######
// ###################################
// ###################################

// function askNumber() {
//     let i = 0;
//     let evenNumbers = 0;
//     while (i < 5) {
//         number = prompt("Enter the number :");
//         console.log(number);
//         i++;
//         if (number % 2 === 0) {
//             evenNumbers += 1;
//             console.log(evenNumbers);
//         }
//     }

//     console.log("You have:", evenNumbers, "even numbers");
// }

// askNumber();

// ****************************************
// ****************************************
// ********** Teacher's Solution **********
// ****************************************
// ****************************************

function evenNumbers() {
    let evenCount = 0;

    for (let counter = 0; counter < 20; counter++) {
        let input = Number(prompt('Enter a number'));

        if (input % 2 === 0) {
            evenCount++;
        }
    }
    console.log('There was' + evenCount + 'even nubmers')
}

evenNumbers();