
// Get input
const pancakeType = document.getElementById('type');
// Get toppings checkboxes
const toppingCheckboxes = document.querySelectorAll('.customization-section:nth-of-type(2) input[type="checkbox"]');
// Get extras checkboxes
const extrasCheckboxes = document.querySelectorAll('.customization-section:nth-of-type(3) input[type="checkbox"]');
// Get total price
const totalPrice = document.querySelector('.price-display span');


// console.log("first " + typeof (toppingCheckboxes));
// console.log("second " + typeof (extrasCheckboxes));

// function to calculate base price (TESTING)
function calcBaseprice() {
    // console.log("Type was changed");
    const value = this.value;
    totalPrice = value;
}

// function to calculate toppings price (TESTING)
function calcToppingsprice() {
    console.log("toppings is triggered");

}

// Event listeners
pancakeType.addEventListener('change', calcBaseprice);

// Event listener for toppings
toppingCheckboxes.forEach(checkbox => {
    console.log("function was called");
});