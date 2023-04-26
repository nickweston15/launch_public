function multiply(num1, num2) {
  return num1 * num2;
}

let rlSync = require("readline-sync");
let first = rlSync.question("Enter the first number: \n")
let second = rlSync.question("Enter the second number: \n")
let result = multiply(first,second);

console.log(`${first} * ${second} = ${result}`);