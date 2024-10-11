// 1. Listens for changes on the pancake type select box and all checkbox inputs.

/*
2. Calculates the total price based on selections:
- Pancake type has a base price.
- Each topping adds $1 to the base price.
- Extras have their specific prices. */

// 3. Displays the dynamically updated total price in the #totalPrice span.


function calculateTotal() {
    // Get the pancake dropdown element
    const pancakeSelect = document.getElementById("type");

    // Get selected price from dropdown
    let pancakePrice = parseFloat(pancakeSelect.value) || 0;
    console.log(pancakePrice);

    // Calculate toppings price
    let toppingsPrice = 0;
    const toppings = document.querySelectorAll('.toppings input[type="checkbox"]');
    for (let topping of toppings) {
        if (topping.checked) {
            toppingsPrice += parseFloat(topping.value);
        }
    }

    // Calculate extras price
    let extrasPrice = 0;
    const extras = document.querySelectorAll('.extras input[type="checkbox"]');
    for (let extra of extras) {
        if (extra.checked) {
            extrasPrice += parseFloat(extra.value);
        }
    }

    // Calculate the total price
    const totalPrice = pancakePrice + toppingsPrice + extrasPrice;

    // Display the total price
    document.getElementById("totalPrice").textContent = totalPrice.toFixed(2);

}

// Event listeners for automatic price calculation
window.onload = function () {
    const pancakeSelect = document.getElementById("type");
    const toppings = document.querySelectorAll('.toppings input[type="checkbox"]');
    const extras = document.querySelectorAll('.extras input[type="checkbox"]');

    // Listen for changes to the pancake selection
    pancakeSelect.addEventListener("change", calculateTotal);

    // Listen for changes to the topping checkboxes
    toppings.forEach(function (toppings) {
        toppings.addEventListener("change", calculateTotal);
    });

    // Listen for changes to the extras checkboxes
    extras.forEach(function (extras) {
        extras.addEventListener("change", calculateTotal);
    });
};