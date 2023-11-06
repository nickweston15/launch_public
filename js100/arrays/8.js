/* How can you check whether a variable holds a value that is an array?
For example, imagine you start writing a function and want to check whether
its argument is an array */

/* You can */

let someValue1 = [0, 1, 0, 0, 1];
let someValue2 = "I leave you my Kingdom, take good care of it.";

function filter(input) {
  return Array.isArray(input);
}

console.log(filter(someValue1));
console.log(filter(someValue2));