
// ---- Original function

// function getOddYears(years) {
//     return years.filter((year) => year % 2 !== 0);
// }

// ---- Original function with debugging (in console)

function getOddYears(years) {
    console.log(years); // checking for got parameters (or arguments?)
    const oddYears = years.filter((year) => year % 2 !== 0);
    console.log(oddYears);
    return oddYears;
}

console.log(getOddYears([2011, 2012, 2013, 2014]));
