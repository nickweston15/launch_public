/* Implement a function catAge that takes a number of human years as input and
converts them into cat years. Cat years are calculated as follows:

- The first human year corresponds to 15 cat years.
- The second human year corresponds to 9 cat years. 
- Every subsequent human year corresponds to 4 cat years. */

function catAge(years) {
  if (years == 0) {
    console.log("0");
  } else if (years == 1) {
    console.log("15");
  } else if (years == 2) {
    console.log("24");
  } else {
    console.log(24 + ((years - 2) * 4));
  }
}

/* You could also use a case/switch syntax like this: 

function catAge(humanYears) {
  switch(humanYears) {
    case 0:
      return 0;
    case 1:
      return 15;
    case 2:
      return 24;
    default:
      return 24 + (humanYears - 2) * 4;
  }
} */

catAge(0);
catAge(1);
catAge(2);
catAge(3);
catAge(4);