"use strict";

const priceElement = document.querySelector('.price-display span'); /* Price text */
const priceBanner = document.querySelector('.price-banner'); /* Price text inside an image */

function calcPrice() {
    const pancakeType = document.getElementById('type');
    const toppingCheckboxes = document.querySelectorAll('.customization-section:nth-of-type(2) input[type="checkbox"]');
    const extrasCheckboxes = document.querySelectorAll('.customization-section:nth-of-type(3) input[type="checkbox"]');
    const deliveryOptions = document.querySelectorAll('.customization-section:nth-of-type(4) input[type="radio"]');
    const customerNameInput = document.getElementById('customerName'); // Customer name

    //Error handling
    // if (deliveryOptions === null) {
    //     console.log("Element not found");
    // } else {
    //     console.log("Element found:", priceElement);
    // }

    let pancakeBasePrice = 0;
    let toppingsPrice = 0;
    let extrasPrice = 0;
    let deliveryPrice = 0;
    let customerName; // Customer name
    let totalPrice = 0;

    // Get base price
    pancakeBasePrice = parseInt(pancakeType.value);

    // Get toppings price
    toppingCheckboxes.forEach(checkbox => {
        if (checkbox.checked) {
            toppingsPrice += parseFloat(checkbox.value);
        }
    })

    // Get extras price
    extrasCheckboxes.forEach(checkbox => {
        if (checkbox.checked) {
            extrasPrice += parseFloat(checkbox.value);
        }
    })

    // Get customer name
    customerName = customerNameInput.value; // Customer name

    // Get delivery options
    deliveryOptions.forEach(option => {
        if (option.checked) {
            deliveryPrice += parseFloat(option.value);
        }
    })

    totalPrice = pancakeBasePrice + toppingsPrice + extrasPrice + deliveryPrice;
    updatePrice(totalPrice);
}

// function to update price-display
function updatePrice(price) {
    priceElement.textContent = `$${price}`;
    priceBanner.textContent = `$${price}`;

    // Add the 'updated' class to trigger the animation
    priceBanner.classList.add('updated');

    // Remove the 'updated' class after the animation completes (e.g., 300ms)
    setTimeout(() => {
        priceBanner.classList.remove('updated');
    }, 300); // Match the transition duration

}


// Event listeners for automatic price calculation
window.onload = function () {

    // ------ Get DOM elements ------

    // Get input
    const pancakeType = document.getElementById('type');
    // Get toppings checkboxes
    const toppingCheckboxes = document.querySelectorAll('.customization-section:nth-of-type(2) input[type="checkbox"]');
    // Get extras checkboxes
    const extrasCheckboxes = document.querySelectorAll('.customization-section:nth-of-type(3) input[type="checkbox"]');
    // Get delivery options
    const deliveryOptions = document.querySelectorAll('.customization-section:nth-of-type(4) input[type="radio"]');
    // Get customer name input
    const customerNameInput = document.getElementById('customerName');

    //  ------ Add event listeners ------

    // Event listener for pancake type
    pancakeType.addEventListener('change', calcPrice);
    // Event listener for toppings
    toppingCheckboxes.forEach((toppings) => {
        toppings.addEventListener('change', calcPrice);
    });
    // Event listener for extras
    extrasCheckboxes.forEach((extras) => {
        extras.addEventListener('change', calcPrice);
    });
    // Event listener for delivery options
    deliveryOptions.forEach((options) => {
        options.addEventListener('change', calcPrice);
    });
    // Event listener for customer name
    customerNameInput.addEventListener('change', calcPrice);
}

// ------ Error check ------

// if (priceElement === null) {
//     console.log("Element not found");
// } else {
//     console.log("Element found:", priceElement);
// }

// if (priceBanner === null) {
//     console.log("Element not found");
// } else {
//     console.log("Element found:", priceElement);
// }


