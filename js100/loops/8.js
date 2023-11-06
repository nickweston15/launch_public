// Write a while loop that logs all odd natural numbers between 1 and 40.

let count = 1;

while (count <= 40) {
  if (count % 2 === 0) {
    count += 1;
    continue;
  }
  console.log(count);
  count += 1;
}

/* Think smarter not harder Stint!!!

let num = 1;

while (num < 40) {
  console.log(num);
  num += 2;
}

*/