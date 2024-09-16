/* 
Write JavaScript code that selects content id by using getElementById.
Write a function which will update the text content of the selected element to "Hello, World!" by clicking the button.
*/

// Function without event listeners
// function updateText() {
//     document.getElementById('content').innerHTML = "Hello World!"
// }

function updateText() {
    document.getElementById("content").innerHTML = "Hello World!"
}

// Function with event listener
// 1. Declare button variable and assign correct element to it
const element = document.getElementById("updateText");
// 2. Create event listener
element.addEventListener("click", updateText);

