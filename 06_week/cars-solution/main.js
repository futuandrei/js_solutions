'use strict';

// All variables should be as up as possible
const searchCarForm = document.querySelector('#searchCar');
const addCarForm = document.querySelector('#addCar');
const cars = [];

// Declare car class 
class Car {
    constructor(license, maker, model, owner, price, color) {
        this.license = license;
        this.maker = maker;
        this.model = model;
        this.owner = owner;
        this.price = price;
        this.color = color;
    }
}

// Function
const searchCar = (e) => {
    e.preventDefault();
    console.log('search car was triggered');
}

const addCar = (e) => {
    e.preventDefault();
    console.log('add car was triggered');
    // get elements
    const license = document.getElementById('license').value;
    const maker = document.getElementById('maker').value;
    const model = document.getElementById('model').value;
    const owner = document.getElementById('current_owner').value;
    const price = document.getElementById('price').value;
    const color = document.getElementById('price').value;

    try {
        // new object
        const newCar = new Car(license, maker, model, owner, price, color);

        // checking if license, maker, model are there, if not throw error
        if (license && maker && model) {
            cars.push(newCar);
            displayTable();
            // console.log(cars);
            // console.log(newCar);
            // console.log(error);
        }
        // execute code
    }
    catch (error) {
        console.log("Mandatory values are missing: Maker, Model, Owner");
        // console.log(error);
    }
}

// Triggered every time new car is added
const displayTable = () => {
    const table = document.querySelector('#carsTable');
    table.innerHTML = table.rows[0].innerHTML;
    cars.forEach(car => {
        // creates row for every element
        const row = table.insertRow(-1);

        // adds value for every cell
        Object.values(car).forEach(text => {
            const cell = row.insertCell(-1);
            cell.textContent = text;
        })
    })
}

// Event listeners
addCarForm.addEventListener('submit', addCar);
searchCarForm.addEventListener('submit', searchCar);



// Event listener for changes in input fields (window.onload)
// window.onload = function () {
//     // Get elements
//     const licensePlate = document.getElementById('license_plate');
//     const carMaker = document.getElementById('maker');
//     const carModel = document.getElementById('model');
//     const currentOwner = document.getElementById('current_owner');
//     const price = document.getElementById('price');
//     const color = document.getElementById('price');

//     // Add event listeners
//     licensePlate.addEventListener("change", sayHello);
//     carMaker.addEventListener("change", sayHello);
//     carModel.addEventListener("change", sayHello);
//     currentOwner.addEventListener("change", sayHello);
//     price.addEventListener("change", sayHello);
//     color.addEventListener("change", sayHello);

// }

// Event listener for change (click) in button which inititates function to collect values entered by the user when the form is submitted




function setupForm() {
    // Get fields

    // Get button

}

// Event listener for load




// event listeners
// fields (6)
// document.getElementById('license_plate').addEventListener('click', sayHello);
// buttons ()
// document.getElementById('button').addEventListener('click', sayHello);


function sayHello() {
    console.log("Hello");
}