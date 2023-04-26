/* Use map and filter to determine the lengths of all the elements in an array
of string values, then discard the even values (keep the odds) */

function oddLengths(strings) {
  let lengths = strings.map((letters) => letters.length);
  let oddLengths = lengths.filter((number) => number % 2 === 1);
  return oddLengths;
}

let arr = ["a", "abcd", "abcde", "abc", "ab"];
console.log(oddLengths(arr));