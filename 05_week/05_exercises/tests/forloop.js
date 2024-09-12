var cubes = [["string", "string"], ["string", "string"]];

// for (var i = 0; i < cubes.length; i++) {
//     for (var j = 0; j < cubes[i].length; j++) {
//         console.log(cubes[i][j]);
//     }
// }


for (let i = 0; i < cubes.length; i++) { // 1. intitate 2. condition 3. counter
    // loop iterates through whole cubes array
    for (let j = 0; j < cubes[i].length; j++) {
        // loop iterates through each item in the array
        console.log(cubes[i][j]);
    }
}

