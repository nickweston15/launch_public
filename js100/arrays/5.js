// Count the number of elements in scores that are 100 or above.

let scores = [96, 47, 113, 89, 100, 102];
let count = 0;

for (i = 0; i < scores.length; i += 1) {
  if (scores[i] >= 100) {
    count += 1;
  }
}

console.log(count);