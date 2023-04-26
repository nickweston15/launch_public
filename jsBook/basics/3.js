// Identify the data type for each of the following values:

let first = typeof "true";
let second = typeof false;
let third = typeof 1.5;
let fourth = typeof 2;
let fifth = typeof undefined;
let sixth = typeof { foo: "bar" };

console.log(
  `The data type of "true" is ${first}.
   The data type of false is ${second}.
   The data type of 1.5 is ${third}.
   The data type of 2 is ${fourth}.
   The data type of undefined is ${fifth}.
   The data type of { foo: "bar" } is ${sixth}.`
);
