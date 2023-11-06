/* How many arguments does the Array.prototype.join() method expect? What happens
if you call it with less or more arguments? */

/* It doesn't expect any arguments, but there's an optional argument where
you can tell it what you want the separator to be when joining the array elements.
So if you give it 0 or 1 arguments it will work as intended to join the elements of
the array using either a comma or the given separator, returned as a new string. If
you give it more than 1 argument it will execute as intended using the first
argument as the separator and then ignore the following arguments. */

let example = ["Coding", "is", "fun!"];

console.log(example.join());
console.log(example.join(" "));
console.log(example.join("_", "-"));