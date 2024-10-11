document.body.onload = generateImages;

// asynchronous function

async function generateImages() {
    try {

        // ----- DIV -------

        // 1. create a new div element
        const newDiv = document.createElement("div");

        // 2. and give it content
        const newContent = document.createTextNode("");

        // 3. add the text node to the newly created div
        newDiv.appendChild(newContent);

        // 4. add the newly created element and its content into the DOM
        const currentDiv = document.getElementById("div");
        document.body.insertBefore(newDiv, currentDiv);


        for (let i = 0; i < 10; i++) {

            const imagePlaceholder = document.createElement("img"); // create new image
            imagePlaceholder.src = `https://robohash.org/${i}.png?set=set4&size=200x200`;
            // imagePlaceholder.src = `https://robohash.org/${i}.png?set=set4;`;
            document.body.insertBefore(imagePlaceholder, newDiv);
        }


    } catch (error) {
        console.error('Error:', error);  // Handle errors
    }

}
