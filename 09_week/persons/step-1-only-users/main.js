document.body.onload = getUsers;

// asynchronous function

async function getUsers() {
    try {
        // ------ User data
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();  // Convert the response to JSON
        console.log(data);  // Log the data
        // ------ Images data
        const imageData = await fetch('https://robohash.org/');
        console.log(imageData);


        data.forEach(element => {

            // ----- DIV -------

            // 1. create a new div element
            const newDiv = document.createElement("div");

            // 2. and give it some content
            const newContent = document.createTextNode(`Name: ${element.name} Username: ${element.username} Email: ${element.email}`);

            // 3. add the text node to the newly created div
            newDiv.appendChild(newContent);

            // 4. add the newly created element and its content into the DOM
            const currentDiv = document.getElementById("div1");
            document.body.insertBefore(newDiv, currentDiv);

            // ----- Heading -------

            // create a new H1 element, give it content, add text node
            const newHeading = document.createElement("h1"); // create new div
            const newHeadingContent = document.createTextNode(element.name); // give it content
            newHeading.appendChild(newHeadingContent); // add text node
            document.body.insertBefore(newHeading, newDiv);

            // ----- Image -------
            const imagePlaceholder = document.createElement("img"); // create new image
            imagePlaceholder.src = "https://via.placeholder.com/100";
            document.body.insertBefore(imagePlaceholder, newDiv);

        });
    } catch (error) {
        console.error('Error:', error);  // Handle errors
    }

}

