// 1. Listens for changes on the pancake type select box and all checkbox inputs.

/*
2. Calculates the total price based on selections:
- Pancake type has a base price.
- Each topping adds $1 to the base price.
- Extras have their specific prices. */

// 3. Displays the dynamically updated total price in the #totalPrice span.

// 4. Capture order info into array:
// - The customer’s name
// - Selected pancake details
// - Chosen delivery method
// - Total cost

// 5. Implement the button to show order info

// *********************************
// Array to store customer orders
// *********************************
let customerOrders = [];

// *********************************
// Function to calculate total price
// *********************************
function calculateTotal() {

    // Get the pancake dropdown element
    const pancakeSelect = document.getElementById("type");

    // Get the total price element (round price banner)
    const priceBannerElement = document.getElementById("priceBanner");
    const totalPriceElement = document.getElementById("totalPrice");

    // Get selected price from dropdown
    let pancakePrice = parseFloat(pancakeSelect.value) || 0;
    console.log(pancakePrice);

    // Calculate toppings price
    let toppingsPrice = 0;
    const toppings = document.querySelectorAll('.toppings input[type="checkbox"]');
    for (let topping of toppings) {
        if (topping.checked) {
            toppingsPrice += parseFloat(topping.value);
            console.log("topping changed");
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

    let deliveryPrice = 0;
    const deliveryOptions = document.querySelectorAll('input[name="delivery"]');
    for (let option of deliveryOptions) {
        if (option.checked) {
            deliveryPrice = parseFloat(option.value);
            console.log("delivery changed");
            break; // Stop the loop after finding the selected option
        }
    }
    // Calculate the total price
    const totalPrice = pancakePrice + toppingsPrice + extrasPrice + deliveryPrice;

    // Display the total price
    document.getElementById("priceBanner").textContent = totalPrice.toFixed(2);
    document.getElementById("totalPrice").textContent = totalPrice.toFixed(2);

    // Trigger the animation by adding the 'scaleUp' class
    const priceBanner = document.querySelector('.price-banner');
    priceBanner.classList.add('scaleUp');

    // Remove the class after the animation to allow it to be retriggered
    setTimeout(function () {
        priceBanner.classList.remove('scaleUp');
    }, 500); // Matches the animation duration (0.5s)


}

// *********************************
// Function to store the order details in the array
// *********************************

function storeOrder() {
    // Get customer name
    const customerName = document.getElementById("customerName").value;

    // Get selected pancake and price
    const pancakeSelect = document.getElementById("type");
    const selectedPancake = pancakeSelect.options[pancakeSelect.selectedIndex].text;
    const pancakePrice = parseFloat(pancakeSelect.value);

    // Get selected toppings
    let selectedToppings = [];
    const toppings = document.querySelectorAll('.toppings input[type="checkbox"]');
    toppings.forEach(topping => {
        if (topping.checked) {
            selectedToppings.push(topping.id);
        }
    });

    // Get selected extras
    let selectedExtras = [];
    const extras = document.querySelectorAll('.extras input[type="checkbox"]');
    extras.forEach(extra => {
        if (extra.checked) {
            selectedExtras.push(extra.id);
        }
    });

    // Get selected delivery option
    let selectedDeliveryMethod = "";
    let deliveryPrice = 0;
    const deliveryOptions = document.querySelectorAll('input[name="delivery"]');
    deliveryOptions.forEach(option => {
        if (option.checked) {
            selectedDeliveryMethod = option.nextSibling.textContent.trim();
            deliveryPrice = parseFloat(option.value);
        }
    });

    // Calculate total cost
    const totalCost = pancakePrice + selectedToppings.length + selectedExtras.reduce((sum, extraId) => sum + parseFloat(document.getElementById(extraId).value), 0) + deliveryPrice;

    // Create an order object
    const order = {
        customerName: customerName,
        pancake: selectedPancake,
        toppings: selectedToppings.length > 0 ? selectedToppings : ["None"],
        extras: selectedExtras.length > 0 ? selectedExtras : ["None"],
        deliveryMethod: selectedDeliveryMethod || "Not selected",
        totalCost: totalCost.toFixed(2)
    };

    // Add the order to the array
    customerOrders.push(order);

    // Show updated order list
    displayOrders();
}

// *********************************
// Function to display the stored orders
// *********************************
function displayOrders() {
    const orderList = document.getElementById("orderList");
    orderList.innerHTML = ""; // Clear the current list

    customerOrders.forEach(order => {
        const orderInfo = `
            <div class="order">
                <p><strong>Customer:</strong> ${order.customerName}</p>
                <p><strong>Pancake:</strong> ${order.pancake}</p>
                <p><strong>Toppings:</strong> ${order.toppings.join(", ")}</p>
                <p><strong>Extras:</strong> ${order.extras.join(", ")}</p>
                <p><strong>Delivery:</strong> ${order.deliveryMethod}</p>
                <p><strong>Total Cost:</strong> $${order.totalCost}</p>
            </div>`;
        orderList.innerHTML += orderInfo;
    });
}

// *********************************
// Event listeners for automatic price calculation
// *********************************
window.onload = function () {
    const pancakeSelect = document.getElementById("type");
    const toppings = document.querySelectorAll('.toppings input[type="checkbox"]');
    const extras = document.querySelectorAll('.extras input[type="checkbox"]');
    const deliveryOptions = document.querySelectorAll('input[name="delivery"]');
    const submitButton = document.getElementById("seeOrder");


    // Listen for changes to the pancake selection
    pancakeSelect.addEventListener("change", calculateTotal);

    // Listen for changes to the topping checkboxes
    toppings.forEach(function (toppings) {
        toppings.addEventListener("change", calculateTotal);
        console.log("topping changed")
    });

    // Listen for changes to the extras checkboxes
    extras.forEach(function (extras) {
        extras.addEventListener("change", calculateTotal);
    });

    // Listen for changes to the delivery radiobuttons
    deliveryOptions.forEach(function (deliveryOption) {
        deliveryOption.addEventListener("click", calculateTotal);
        console.log("delivery changed")

    });
    // Add event listener for "See Order" button
    submitButton.addEventListener("click", function () {
        // Check if the array is not empty, then clear it
        if (customerOrders.length > 0) {
            customerOrders = [];  // Clear the array
            console.log("Previous orders cleared.");
        }

        storeOrder();  // Store the new order after clearing the previous ones
    });
};

