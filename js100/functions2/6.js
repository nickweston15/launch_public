/* Create a function removeLastChar that takes a string as an argument,
and returns the string without the last character. */

function removeLastChar(str) {
  console.log(str.slice(0, str.length - 1));
}

removeLastChar("ciao!");
removeLastChar("hello");