/* Refactor the code from the previous exercise to use explicit coercion,
so it logs 15 instead. */

/* To do this, first we use the Number method to explicitly coerce "5"
to a Number data type. In other words, converting "5" to 5. We set that
return equal to a variable that we can use in our console.log() function. */
let toNum = Number("5");

//Then we add the two numbers together within the parantheses.
console.log(toNum + 10);
