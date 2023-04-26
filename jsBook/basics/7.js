/* Will an error occur if you try to access an array element with an index that
is greater than or equal to the length of the array? For example: */

let foo = ["a", "b", "c"];
console.log(foo.length); // => 3

/* My assumption is that this will result in an error because array indices
start at 0 and thus, the only applicable indices in our array, foo, are
0, 1, and 2. An index of 3 doesn't exist. I think the error type will
be undefined.*/
console.log(foo[3]); 