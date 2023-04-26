// What does the following program log to the console? Why?

/* This will log: "hi hello". foo's a key value gets changed to "hi" and then
logged by the bar function. However, the qux value is not changed from "hello"
by the bar function because primitive values like Strings are not mutable. Also,
the code reassigned argument2 as "hi" but nothing happens to the qux variable.  */

let foo = {
  a: "hello",
  b: "world",
};

let qux = "hello";

function bar(argument1, argument2) {
  argument1.a = "hi";
  argument2 = "hi";
}

bar(foo, qux);

console.log(foo.a);
console.log(qux);