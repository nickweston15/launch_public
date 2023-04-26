// What does the following function do?

/* First it splits the given string into separate values of an array wherever
there is a " " in the string. Then, it reverses the order of the array values.
Then it creates a new array with map and returns the length of each of the
array values. */

function doSomething(string) {
  return string.split(" ").reverse().map((value) => value.length);
}