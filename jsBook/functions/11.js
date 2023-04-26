/* Using the code from Exercise 9, are the left and right variables on line 1
and line 2 the same as the left and right variables on lines 10-12? Explain
your reasoning. */

/* No, they are different. The ones on lines 8/9 are local variables because they
are parameters for that function, whereas the ones are lines 17/18 are global
variables with the same name. The function parameters shadow the global variables.  */

function multiply(left,right) {
  let product = left * right;
  return product;
}

function getNumber(prompt) {
  return parseFloat(question(prompt));
}

let left = getNumber("Enter the first number: ");
let right = getNumber("Enter the second number: ");
console.log(`${left} * ${right} = ${multiply(left, right)}`);