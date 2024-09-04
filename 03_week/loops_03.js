// Create a program that continuously prompts the user to input distance (in kilometers) and time (in hours) and then calculates the average speed. The program should terminate when the user enters 0 for the distance. Upon receiving a distance of 0, the program should not prompt for any further input.


// ###################################
// ###################################
// ########### Solution 1 ############
// ############ Works ! ##############
// ###################################
// ###################################


// function calculate() {
//     let distance = Number(prompt("input distance in kilometer"));
//     let time = Number(prompt("Input time in hours"));
//     let speed = Math.round(distance / time);
//     if (prompt != 0) {
//         console.log("Your speed was: ", speed, "km/h");
//     }
// }

// calculate();

// ###################################
// ###################################
// ############ Solution 2 ###########
// ########### Not working ###########
// ###################################
// ###################################



let distance = Number(prompt("input distance in kilometer"));
let time = Number(prompt("Input time in hours"));
let speed = Math.round(distance / time);

while (speed != 0) {
    console.log("Your speed was: ", speed, "km/h");
    break;
}

// ###################################
// ###################################
// ############ Solution 2 ###########
// ###### Teacher's solution #########
// ###################################
// ###################################

// function avgSpeed() {
//     let distance, time;

//     while (distance != 0) {
//         distance = +prompt("input distance in kilometer");

//         if (distance == 0)
//             console.log("distance 0 - game over");
//         break;
//     }

//     time = +prompt("Input time in hours (use number)");

//     let average = distance / time;
//     alert("average is: " + average);
//     console.log("data: ", distance, time, average);
// }

avgSpeed();