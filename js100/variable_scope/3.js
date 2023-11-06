/* What will the following code log to the console and why? 
Don't run it until you have tried to answer. */

/* I think this is a question of if it can log the variable outside of the 
if statement block. I am going to guess that it cannot log the value outside
of the if statement block and will instead give a ReferenceError since it is
not defined. 

One thing I didn't say but it is because it is defined with let. */

if (true) {
  let myValue = 20;
}

console.log(myValue);