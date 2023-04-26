/* Identify all of the variables named on each line of the following code. You
may assume that question is the name of a built-in function in JavaScript (it
is not, so this code won't work as written.) */

/* In order of appearance: 
- multiply, left, right
- product, left, right
- getNumber, prompt
- parseFloat, question, prompt (I missed the first one here, but it's a function)
- left, getNumber
- right, getNumber
- console (it's a function), left, right, multiply */

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