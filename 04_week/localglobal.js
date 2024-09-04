let local = 'I am global variable';

function exampleFunction1() {
    local = 'I am local variable'
    return local;
}

function exampleFunction1() {
    local = 'I am local variable'
    return local;
}

console.log(local); // -> I am global variable
console.log(exampleFunction()); // -> I am local variable