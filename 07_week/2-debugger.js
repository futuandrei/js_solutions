function getOddYears(years) {
    debugger; // Execution will pause here
    return years.filter((year) => year % 2 !== 0);
}

console.log(getOddYears([2011, 2012, 2013, 2014]));