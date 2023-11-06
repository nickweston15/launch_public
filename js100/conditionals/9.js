// Without running the below code, determine what will be logged to the console

/* I think this will log "$3.99". Since sale is true, admission price gets
flipped to false since it uses the logical not operator to flip the return
value of sale. Thus, the second value gets returned in the ternary statement.

Side note: this code is confusing and they should drop the not operator and
switch the order of the values of admission price.*/

let sale = true;
let admissionPrice = !sale ? 5.25 : 3.99;

console.log("$" + admissionPrice);