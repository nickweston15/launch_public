/* Use the template literal syntax along with the expression
Number("5" + 10) to log the following sentence to the console:
The value of 5 + 10 is 15. */

// First, we set the return of the given expression equal to a variable.
let result = Number("5") + 10;

/* Then, we log the given sentence to the console, using template literals
to include the variable, result, to display 15. */
console.log(`The value of 5 + 10 is ${result}.`);