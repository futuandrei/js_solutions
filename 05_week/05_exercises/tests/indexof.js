// w3schools


// # Search a string for "welcome":
// # -> indexOf() returns the position of the first occurrence of a value in a string. 
// # - >  13

// let text = "Hello world, welcome to the universe.";
// let result = text.indexOf("welcome");
// console.log(result);

// # Search a string for "welcome":
// # indexOf() returns the position of the first occurrence of a value in a string:
// # - > -1 (method returns -1 if the value is not found.)

// let text = "Hello world, welcome to the universe.";
// let result = text.indexOf("Welcome");
// console.log(result);

// # Find the first occurrence of "e":

// let text = "Hello world, welcome to the universe.";
// let result = text.indexOf("e");
// console.log(result);

// # Find the first occurrence of "e", starting at position 5:

// let text = "Hello world, welcome to the universe.";
// let result = text.indexOf("e", 5);
// console.log(result); // logs first "e" found after position 5.

// # Find the first occurrence of "a"
let text = "Hello world, welcome to the universe.";
// let result = text.indexOf("a");
// console.log(result); // -> -1

// # Find the occurrence of "o" and count how many "o's" are in text
let count = 0;
for (let i = 0; i < text.length; i++) {
    if (text[i] === "o") {
        count = count + 1;
    }
}
console.log(count);
