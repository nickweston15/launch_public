/* What is the difference between the following two code snippets? Check
the MDN documentation on while and do...while. */

/* The main difference is the first uses a while loop and the second uses
a do while loop. The first one won't log anything because counter starts
at 0 and never gets the chance to become less than 0 with the decrement
operator. The second one conversely will log Woooot! one time because in a 
do while loop, the code runs one time before evaluating the condition. When
it evaluate counter the first time, it will be -1 then not greater than 0
and won't run again. */

// let counter = 0;

//First
while (counter < 0) {
  console.log("Woooot!");
  counter -= 1;
}


// Second
do { 
  console.log("Woooot!");
  counter -= 1;
} while (counter > 0);