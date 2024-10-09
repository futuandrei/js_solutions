/* Not working */

// Search function
const searchCar = (e) => {
    e.preventDefault();
    const license = document.querySelector('#license_plate').value;

    for (let i = 0; i < cars.length; i++) {
        // If car is found and has discounted price
        if (cars[i].license === license) {
            document.querySelector('#searchResult').innerHTML = `Car found: Maker: ${cars[i].maker}, Model: ${cars[i].model}, Owner: ${cars[i].owner} Discounted price: ${cars[i].discPrice}`;
        }
    }
    // When no car is found, this is returned after looping through all cars
    document.querySelector('#searchResult').innerHTML = "No car found";
};
