// Write a function that checks whether a string is empty or not

/* I made this a bit more complicated than need be. You can utilize an
equality operator and just return string.length === 0 which will return
true or false depending on if the string is blank since a blank string
is equal to 0 in Javascript. */

function isBlank(string) {
  if (string == "") {
    return true;
  } else {
    return false;
  }
}

console.log(isBlank('mars'));
console.log(isBlank(' '));
console.log(isBlank(''));