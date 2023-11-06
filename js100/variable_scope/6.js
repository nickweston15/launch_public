/* What will the following code log to the console and why? 
Don't run it until you have tried to answer. */

/* This is tricky, but I think b becomes true within the if block, but then
stays as false outside of the if block where the variable is logged, thus
logging false. */

let a = 5;
let b = false;

if (a > 4) {
  let b = true;
}

console.log(b);