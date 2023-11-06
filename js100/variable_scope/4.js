/* What will the following code log to the console and why? 
Don't run it until you have tried to answer. */

/* I think if you define a variable with let and then use it within an if
statement, that it will be able to reference it. Therefore it should
have no problem logging 1 to the console. */

function myFunction() {
  let a = 1;

  if (true) {
    console.log(a);
  }
}

myFunction();