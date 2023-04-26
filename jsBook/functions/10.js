/* Using the code from Exercise 9, classify each variable name as either global
or local. For our purposes here, you may assume that the code from
Exercise 9 is the entire program. */

/* In order of appearance: 
- multiply (global), left (local), right (local)
- product (local), left (local), right (local)
- getNumber (global), prompt (local)
- parseFloat (global), question (global), prompt (local)
- left (global), getNumber (global)
- right (global), getNumber (global)
- console (global), left (global), right (global), multiply (global) */

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