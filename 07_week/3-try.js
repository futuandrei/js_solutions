//Handling runtime errors

function getOddYears(years) {
    try {
        return years.filter((year) => year % 2 !== 0);
    } catch (error) {
        console.error('An error occurred:', error);
    }
}

// console.log(getOddYears([2011, 2012, 2013, 2014]));
console.log(getOddYears("not an array"));