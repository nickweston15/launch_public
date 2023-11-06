/* What will the following code log to the console and why? 
Don't run it until you have tried to answer. */

/* This will log 2 because even if you initialize a variable before the function
declaration, it can run in the function. But then let is a declaration that
allows the variable to be changed so it will be changed to 2 before
myFunction is called. */

let a = 1;

function myFunction(a) {
  console.log(a);
}

let b = 2;

myFunction(b);