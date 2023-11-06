/* What will the following code log to the console and why? 
Don't run it until you have tried to answer. */

/* Ok so similar to the last one. I think this is a question of is defining
a variable with let gets hoisted the same way defining with var does. I don't
this it is, rather I think it will throw a ReferenceError. */

console.log(greeting);
let greeting = "Hello world!";