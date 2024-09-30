'use strict';

// All variables should be as up as possible
const searchCarForm = document.querySelector('#searchCar');
const addCarForm = document.querySelector('#addCar');
const cars = [];

// Declare car class 
class Car {
    constructor(license, maker, model, year, owner, price, color) {
        this.license = license;
        this.maker = maker;
        this.model = model;
        this.year = year; // added year variable as required
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
    // console.log('add car was triggered');
    // get elements
    let license = document.getElementById('license').value;
    let maker = document.getElementById('maker').value;
    let model = document.getElementById('model').value;
    let year = document.getElementById('year').value; // added year variable
    let owner = document.getElementById('current_owner').value;
    let price = document.getElementById('price').value;
    let color = document.getElementById('color').value;

    let current_year = 2024; // added current year. Replace this with dynamic, auto-updated value!    

    // creating new object
    try {

        if (!license & !maker & !model & price) {
            throw "All fields (license plate, maker, model and price) must be filled."
        }
        if (isNaN(price)) {
            throw "price should be a number!"
        }
        if (isNaN(year)) {
            throw "year should be a number!"
        }
        if (year < 0) {
            throw "year should be a positive number!"
        }
        if ((year < 1886) || (year > current_year)) {
            throw "year should be between 1886 - 2024!"
        }

        // Adding the car
        const newCar = new Car(license, maker, model, year, owner, price, color);
        cars.push(newCar);
        displayTable();
        // Empty values
        license = document.getElementById('license').value = '';
        maker = document.getElementById('maker').value = '';
        model = document.getElementById('model').value = '';
        year = document.getElementById('year').value = '';
        owner = document.getElementById('current_owner').value = '';
        price = document.getElementById('price').value = '';
        color = document.getElementById('color').value = '';
    }
    catch (error) {
        alert(error);
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