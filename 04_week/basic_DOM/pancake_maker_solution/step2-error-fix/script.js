"use strict";

const priceElement = document.querySelector('#totalPrice'); /* Price text */
const priceBanner = document.querySelector('#bannerPrice'); /* Price text inside an image */

// Error checks
if (!priceElement || !priceBanner) {
    console.error("Price elements not found in the DOM.");
}



function calcPrice() {

    const pancakeType = document.getElementById('type');
    const toppingCheckboxes = document.querySelectorAll('.customization-section:nth-of-type(2) input[type="checkbox"]');
    const extrasCheckboxes = document.querySelectorAll('.customization-section:nth-of-type(3) input[type="checkbox"]');

    let pancakeBasePrice = 0;
    let toppingsPrice = 0;
    let extrasPrice = 0;
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
            // console.log(checkbox.value);
            extrasPrice += parseFloat(checkbox.value);
        }
    })

    totalPrice = pancakeBasePrice + toppingsPrice + extrasPrice;
    // console.log('Total toppings price:', toppingsPrice);
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
}

