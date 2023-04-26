// Use reduce to compute the sum of the squares of all numbers in an array.

sumOfSquares = (arr) => {
  return arr.reduce((acc, curr) => {
    return acc + (curr * curr);
  }, 0);
};


let array = [3, 5, 7];
console.log(sumOfSquares(array));