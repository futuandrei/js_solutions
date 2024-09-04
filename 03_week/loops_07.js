/* Make a program that asks ten numbers. Program calculates and prints out sum and average, also prints out the smallest and biggest number. */

// ###################################
// ###################################
// ########### My Solution ###########
// ###################################
// ###################################

// function askNumbers() {
//     let i = 1;
//     let sum = 0;
//     let average = 0;
//     let smallest = Infinity;
//     // let smallest = 0;
//     let biggest = 0;
//     while (i <= 5) {
//         let yourNumber = +prompt("Please give a number");
//         sum = sum + yourNumber;
//         average = sum / i;
//         if (yourNumber !== 0 && yourNumber < smallest) {
//             // checks if input is not 0 and smaller than smallest
//             // when "1" it updates "1" to smallest
//             // when "2" it should not update "2" to smallest
//             console.log(smallest);
//             smallest = yourNumber;
//         } if (yourNumber > biggest) {
//             // checks for biggest
//             console.log(biggest);
//             biggest = yourNumber;
//         }
//         i++;

//     }
//     console.log("sum :", sum);
//     console.log("average :", average);
//     console.log("smallest :", smallest);
//     console.log("biggest :", biggest);
// }

// askNumbers();

// ``````````````````````````````````````````````````````
// ``````````````````````````````````````````````````````
// `````````````````` Teacher's Solution ````````````````
// ``````````````````````````````````````````````````````
// ``````````````````````````````````````````````````````

function myFunction() {
    let sum = 0;
    let smallest = Infinity;
    let biggest = -Infinity;
    let average = 0;
    let count = 5;
    for (let counter = 0; counter < count; counter++) {
        let input = +prompt('Number!?!?!');
        sum += input;

        if (input < smallest) {
            smallest = input;
        }
        if (input > biggest) {
            biggest = input;
        }
    }

    console.log(`sum : ${sum}. average: ${average}. smallest: ${smallest}. biggest: ${biggest}.`);
}

myFunction();