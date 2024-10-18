
// Get total price
const priceDisplayDiv = document.querySelector('.price-display span');

const pancakeBasePrice = 5;

// function to calculate total price
function updateTotalPrice() {

    // ------ Get inputs ------
    // Get pancake types
    const pancakeType = document.getElementById('type');

    // Get toppings checkboxes
    const toppingCheckboxes = document.querySelectorAll('.customization-section:nth-of-type(2) input[type="checkbox"]');

    // Get extras checkboxes
    const extrasCheckboxes = document.querySelectorAll('.customization-section:nth-of-type(3) input[type="checkbox"]');

    let totalPrice = 0;
    let toppingsPrice = 0;
    let extrasPrice = 0;

    // Get base price
    const pancakeBasePrice = parseInt(pancakeType.value);

    // Get toppings price
    toppingCheckboxes.forEach(checkbox => {
        checkbox.addEventListener('change',
            function () {
                toppingsPrice = parseInt(toppingsPrice + checkbox.value);
                console.log("something is happening");
                updatePriceDisplay;
                console.log(toppingsPrice);
            }

        );

    })
    totalPrice = pancakeBasePrice + toppingsPrice;

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

