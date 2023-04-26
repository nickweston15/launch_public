/* What does this code log to the console? Does executing the foo function affect
the output? Why or why not? */

/* This code will log 1 to the console. Executing the foo function doesn't affect
the ouput in our code because the console.log statement is outside of the foo
function block. The foo function does change the value bound to the bar variable
to 2, but only locally within the code block. Once that block ends, the global
variable bar is still 1. */

let bar = 1;
function foo() {
  let bar = 2;
}

foo();
console.log(bar);