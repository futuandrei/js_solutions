// Make a programm which will take in a string as an argument and will reverse it.

// ``````````````````````````````````````````````````````
// ``````````````````````````````````````````````````````
// `````````````` FreeCodeCamp's Solution ````````````````
// ``````````````````````````````````````````````````````
// ``````````````````````````````````````````````````````


function reverseString(str) {
    // Step 1. Use the split() method to return a new array
    let splitString = str.split(""); //Empty quotation means each character will be split into its own index
    // console.log(splitString);
    // Step 2. Use the reverse() method to reverse the new created array
    let reverseArray = splitString.reverse();
    // Step 3. Use the join() method to join all elements of the array into a string
    let joinArray = reverseArray.join("");
    //Step 4. Return the reversed string
    // console.log(joinArray);
    return joinArray;
    // return joinArray;
}

console.log(reverseString("Hello"));