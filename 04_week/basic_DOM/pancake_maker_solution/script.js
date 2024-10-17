
// Get input and checkboxes
const pancakeType = document.getElementById("type");
const toppingSelection = document.querySelector("#nuts");

// Event listeners
pancakeType.addEventListener("change", doSomething);
toppingSelection.addEventListener("change", doSomething);

// function 
function doSomething() {
    // console.log("Type was changed");
    const value = this.value;
    console.log(value);
}

