// Without running the following code, what do you think it will output?

/* I think this code will output "42, 3.1415" because since we are giving three
arguments to a function that only requires two parameters, the arguments given 
beyond the first two will be ignored. */

function foo(bar, qux) {
  console.log(bar);
  console.log(qux);
}

foo(42, 3.1415, 2.718);