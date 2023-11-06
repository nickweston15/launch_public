// Determine the output that the following code will log to the console. 

/* This code will log a list of equations that equal 3, starting with 3 / 1 = 3.
Then the first number (dividend) will increase by 3 and the second number (divisor)
will increase by 1 at the same time with the new equation being printed, until
the dividend goes over 30.

EDIT: well, it was a trick. There were no () after multiplesOfThree invocation, so
it was never run. But if there was, my answer was correct. Pay attention to syntax. */

function multiplesOfThree() {
  let divisor = 1;

  for (let dividend = 3; dividend <= 30; dividend += 3) {
    console.log(dividend + ' / ' + divisor + ' = 3');
    divisor += 1;
  }
}

multiplesOfThree();