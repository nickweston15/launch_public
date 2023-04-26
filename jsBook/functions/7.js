// Without running the following code, what do you think it will output?

/* I think this will output: "Hello Undefined" because since we only pass one
argument into a function that requires two parameters, the second parameter is
defaulted to undefined. */

function foo(bar,qux) {
  console.log(bar);
  console.log(qux);
}

foo("Hello");