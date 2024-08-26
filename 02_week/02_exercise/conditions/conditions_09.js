/* Write a function named secretWordGame that takes a word as a parameter and returns a special message based on the following conditions:

If the word is "JavaScript", return "You found the secret word!".
If the word starts with the letter "J", return "You're close, but not quite!".
If the word ends with the letter "t", return "Almost there!".
If the word contains the letter "e" anywhere, return "Good guess, but not the secret word!".
For any other word, return "Keep trying!".
*/

function secretWordGame(word) {
    if (word == "JavaScript") {
        return "You found the secret word!"
        //correct answer
    } else if (word.charAt(0) == "J") {
        //first character is J or j
        return "You're close, but not quite!"
    } else if (word.at(-1) === "t") {
        //last character is t (Elephant case)
        return "Almost there!"
    } else if (word.toLowerCase().includes("e")) {
        //word includes E or e
        return "Good guess, but not the secret word!"
    } else {
        //any other word
        return "Keep trying!"
    }

}



// Sample usage - do not modify
console.log(secretWordGame("JavaScript"));  // Outputs: "You found the secret word!"
console.log(secretWordGame("Java"));        // Outputs: "You're close, but not quite!"
console.log(secretWordGame("Cat"));         // Outputs: "Almost there!"
console.log(secretWordGame("Estonia"));     // Output: "Good guess, but not the secret word!"
console.log(secretWordGame("Elephant"));    // Outputs: "Almost there!"
console.log(secretWordGame("Dog"));         // Outputs: "Keep trying!"
console.log(secretWordGame("Jeopardyt"));         // Outputs: "You're close, but not quite!"


