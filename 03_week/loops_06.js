// Develop a program that initially asks the user for a single number. Following this, the program should inquire if the user wishes to continue providing numbers with the prompt: 'Do you want to continue giving numbers? (y/n)'. If the user responds with 'y', the program will request another number. If the response is 'n', the program terminates. Upon termination, it calculates and displays the average of all entered numbers.

// ask number
// want to continue y/n if yes ->
// ask number
// want to continue y/n if no ->
// terminate & calculate the average of entered numbers
// displays numbers

// ###################################
// ###################################
// ########## Solution 1 ###########
// ###################################
// ###################################

function askNumber() {
    let yourNumber;
    let continuation = "y";
    let average;
    while (continuation === "y") {
        if (!yourNumber) {
            yourNumber = Number(prompt("Give me a number of your choice"));
        } else {
            yourNumber = Number(prompt("Incorrect input, give me a number of your choice"));
        }
        console.log(yourNumber);
        continuation = prompt("Do you want to continue giving numbers? (y/n");
    }
}

askNumber();

// ###################################
// ###################################
// ####### Solution with confirm #######
// ###################################
// ###################################

// function askNumber() {
//     let yourNumber;
//     let continuation = "y";
//     let average;
//     while (continuation === "y") {
//         if (typeof yourNumber === "number") {
//             yourNumber = Number(prompt("Give me a number of your choice"));
//         } else {
//             yourNumber = Number(prompt("Incorrect input, give me a number of your choice"));
//         }
//         console.log(yourNumber);
//         let text = "Do you want to continue giving numbers? (y/n";
//         if (confirm(text) == true) {
//             continue;
//             console.log("You pressed yes!")

//         } else {
//             break;
//         }
//     }
// }

// askNumber();

// ``````````````````````````````````````````````````````
// ``````````````````````````````````````````````````````
// `````````````````` Teacher's Solution ````````````````
// ``````````````````````````````````````````````````````
// ``````````````````````````````````````````````````````

function averageNumbers() {
    let sum = 0;
    let count = 0;

    while (true) {
        let input = +prompt('Enter a number')
        sum += input;
        count++;

        let shouldContinue = prompt('Do you want to continue giving nubmers? (y/n)');

        if (shouldContinue === 'n') {
            break;
        }
    }

    let average = sum / count;
    console.log(average);
}

averageNumbers();