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
