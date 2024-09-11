/* 
Write JavaScript code that adds an event listener to the button.

When the button is clicked, the function should:
- Retrieve the value from the input field.
- Create a new <li> element and set its text content to the input field's value.
- Append the new <li> element to the fruitList <ul>.

Ensure the input field is cleared after adding the fruit to the list.

*/

document.getElementById('addFruitBtn').addEventListener('click', function () {
    // ask user for input
    let listItem = document.getElementById('fruitInput').value;
    // get the list
    let list = document.getElementById('fruitList').value;
    console.log(list);
    // list.appendChild(listItem);
    // alert('Button clicked!');
});