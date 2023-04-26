// What does this log to the console? Why?

/* This will log: [1, 4, 3] because when you assign 1 array to another,
they reference the exact same array as the same memory. So when you change that
array, both variabes values change. */

let array1 = [1, 2, 3];
let array2 = array1;
array1[1] = 4;
console.log(array2);
