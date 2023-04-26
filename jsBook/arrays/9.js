/* Without using a for, while, or do/while loop, write some code that checks
whether the number 3 appears inside these arrays: */

let numbers1 = [1, 3, 5, 7, 9, 11];
let numbers2 = [];
let numbers3 = [2, 4, 6, 8];

/* Hahahah, well I guess I made this too complicated, and it didn't work anyway.

function check3(arr) {
  arr.forEach(val => {
    if(val === 3) {
      return true;
    } else {
      return false;
    }
  })
}

check3(numbers1);
check3(numbers2);
check3(numbers3); */

console.log(numbers1.includes(3));
console.log(numbers2.includes(3));
console.log(numbers3.includes(3));