/* Change your isBlank function from the previous exercise to return true
if the string is empty or only contains whitespace. */

function isBlank(string) {
  return string.trim().length === 0;
}

console.log(isBlank('mars'));
console.log(isBlank(' '));
console.log(isBlank(''));