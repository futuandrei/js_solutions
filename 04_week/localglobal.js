let local = 'I am global variable';

function exampleFunction() {
    local = 'I am local variable'
    return local;
}

function exampleFunction() {
    local = 'I am global variable'
    return local;
}

console.log(local); // -> I am global variable
console.log(exampleFunction()); // -> I am local variable