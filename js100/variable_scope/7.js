/* What will the following code log to the console and why? 
Don't run it until you have tried to answer. */

/* This will log 1 because even if you initialize a variable before the function
declaration, it can run in the function. */

let a = 1;

function myFunction() {
  console.log(a);
}

myFunction();