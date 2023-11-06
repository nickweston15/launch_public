/* What will the following code log to the console and why? 
Don't run it until you have tried to answer. */

/* This will log an error because when you declare a variable with const,
it can't be changed. You try to change it and will get a TypeError.*/

const a = 1;

function myFunction() {
  a = 2;
}

myFunction(a);