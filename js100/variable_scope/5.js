/* What will the following code log to the console and why? 
Don't run it until you have tried to answer. */

/* I thought this should log 1 and then log 2 after being reassigned.
However, a within the if statement block isn't assigned until the let statement
in the if statement block and therefore we're trying to log a value
before it is initialized, providing a ReferenceError. */

function myFunction () {
  let a = 1;

  if (true) {
    console.log(a);
    let a = 2;
    console.log(a);
  }
}

myFunction();