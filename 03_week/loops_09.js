// Make program which will use a while loop to calculate the sum of all numbers from 1 to 100.

// ###################################
// ###################################
// ########### My Solution ###########
// ###################################
// ###################################

function calculateSum() {
    let number = 0;
    let sum = 0;
    while (number < 100) {
        number = number + 1;
        sum = sum + number;
        console.log("number :", number);
        console.log("result :", sum);
        console.log(" ");
    }
}
calculateSum();