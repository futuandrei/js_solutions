const searchCar = (e) => {
    e.preventDefault();
    const license = document.querySelector('#license_plate').value;
    let carFound = false;

    for (let i = 0; i < cars.length; i++) {
        // If car is found and has discounted price
        if (cars[i].license === license && cars[i].discPrice) {
            console.log("car found");
            console.log(cars[i]);
            document.querySelector('#searchResult').innerHTML = `Car found: Maker: ${cars[i].maker}, Model: ${cars[i].model}, Owner: ${cars[i].owner} Discounted price: ${cars[i].discPrice}`;
            carFound = true;
        }
        else if (cars[i].license === license) {
            document.querySelector('#searchResult').innerHTML = `Car found: Maker: ${cars[i].maker}, Model: ${cars[i].model}, Owner: ${cars[i].owner}`;
            carFound = true; // Car is found, so set 
            // return;
        }
        else if (!carFound) {
            // When no car is found, this is returned after looping through all cars
            document.querySelector('#searchResult').innerHTML = "No car found";
        }
    }
};