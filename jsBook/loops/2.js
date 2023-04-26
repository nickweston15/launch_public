function factorial(num) {
  let result = 1;
  for(let counter = num; counter > 0; counter -= 1) {
    result *= counter;
  }
  return result;
}

console.log(factorial(1));
console.log(factorial(2));
console.log(factorial(3));
console.log(factorial(4));
console.log(factorial(5));
console.log(factorial(6));
console.log(factorial(7));
console.log(factorial(8));