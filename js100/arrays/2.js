// Write a function that returns the first element of an input array.

/* Note that you have to do -1 because the length is 3 since in JavaScript,
arrays have a zero-based index */

function last(array) {
  return array[array.length-1];
}

console.log(last(["Earth", "Moon", "Mars"]));