// ###################################
// ###################################
// ########### My Solution ###########
// ###################################
// ###################################
// No checking internet ;-)
// with While loop

// let balance = Number(1000);

// function deposit() {
//     let amount = +prompt('How much would you like to deposit?');
//     balance = balance + amount;
//     return balance;
// }

// function withdraw() {
//     let amount = +prompt('How much would you like to withdraw?');
//     balance = balance - amount;
//     console.log(balance);
//     return balance;

// }

// function main() {
//     let userAction;
//     while (userAction !== 4) {
//         userAction = +prompt('Would you like to: \n 1: check balance \n 2: deposit money \n 3: withdraw money \n 4: exit');

//         if (userAction == 1) {
//             alert('Your balance is: ' + balance);
//             console.log(balance);
//         } else if (userAction == 2) {
//             alert('Your balance is now: ' + deposit());
//         } else if (userAction == 3) {
//             alert('Your balance is now: ' + withdraw());
//         }

//         console.log(userAction);
//     }
// }

// main();

// ###################################
// ###################################
// ########### My Solution ###########
// ###################################
// ###################################
// No checking internet ;-)
// with Switch

let balance = Number(1000);

function deposit() {
    let amount = +prompt('How much would you like to deposit?');
    balance = balance + amount;
    return balance;
}

function withdraw() {
    let amount = +prompt('How much would you like to withdraw?');
    balance = balance - amount;
    console.log(balance);
    return balance;

}

function main() {
    let userAction;
    while (userAction !== 4) {
        userAction = +prompt('Would you like to: \n 1: check balance \n 2: deposit money \n 3: withdraw money \n 4: exit');

        if (userAction == 1) {
            alert('Your balance is: ' + balance);
            console.log(balance);
        } else if (userAction == 2) {
            alert('Your balance is now: ' + deposit());
        } else if (userAction == 3) {
            alert('Your balance is now: ' + withdraw());
        } else if (userAction !== 1, userAction !== 2, userAction !== 3, userAction !== 4) {
            alert('Incorrect input');
            // } else if (isNaN) {
            // To check if the input is not a number
            //     alert('Only numbers are allowed')

        }

        console.log(userAction);
    }
}

main();