
const priceDisplayDiv = document.querySelector('.price-display span');


function updateTotalPrice() {

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
    console.log('Total toppings price:', toppingsPrice);
    updatePriceDisplay(totalPrice);
}

// function to update price-display
function updatePriceDisplay(price) {
    priceDisplayDiv.textContent = `$${price}`;
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
    pancakeType.addEventListener('change', updateTotalPrice);
    // Event listener for toppings
    toppingCheckboxes.forEach((toppings) => {
        toppings.addEventListener('change', updateTotalPrice);
    });
    // Event listener for extras
    extrasCheckboxes.forEach((extras) => {
        extras.addEventListener('change', updateTotalPrice);
    });
}

