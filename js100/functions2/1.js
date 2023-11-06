/* How can we alter the function definition of greet so that the parameter
greeting is assigned a default value of "Hello" when no argument is passed
to the function invocation? */

/* I added the = "Hello" to be the default parameter. */

function greet(greeting = "Hello") {
  console.log(greeting + ', world!');
}

greet("Salutations"); 
greet();
greet(undefined);