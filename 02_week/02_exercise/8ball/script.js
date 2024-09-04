// Create a Magic 8-Ball program that emulates the classic fortune-telling toy. The user will input a yes-or-no question, and the program will output a random response from the 8-Ball. Implement the program using conditional statements to select and display one of several predefined responses.

// User inputs a question eg. Should I read a book ?
// Computer checks if the sentence is a question. Checks for key word, eg. does the sentence contain words can, should etc and question mark.
// Computer will produce an answer eg. Trust the force.

const txt1 = document.getElementById('uquestion'); //'user_question' is ID, script is looking for
const btn1 = document.getElementById('button1');
const out1 = document.getElementById('output1');

function fun1() {
    out1.innerHTML = txt1.value;
    //object is paragraph. InnerHTML is property, which will look for contents between open and closed tags
    console.log("clicked!");
}

btn1.addEventListener('click', fun1);
