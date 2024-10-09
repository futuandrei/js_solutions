# Car task 2 solution

## Steps / Issues:

### Placed try / catch / throw as required

- Replaced ifs to try catch
- Some issues with catching 2 errors at the same time (if empty and if license is not a number). Solved eventually.

### Empty fields upon pressing "Submit"

Had issue that fields were not emptied. Solved by changing const to let and assigining empy '' to value.

BEFORE:
const maker = document.getElementById('maker').value;
AFTER:
let maker = document.getElementById('maker').value = '';

### Empty rows were updated to table.

Solved this by inserting "required" into HTML.

### Introduced "year" variable as required in task.

Added variable to all required places.
Added "if" to check that year is a number.

## Created a function to calculate discounted price.

- Created a dynamically updated year variable:

let current_year = new Date().getFullYear();

## Updated search car function:

- Query selector to get license plate value

### Improvements / considerations

If there are multiple cars, consider using variable(flag) to store boolean value to store information whether car was found.

let carFound = false;

> carFound = true;
> break;
