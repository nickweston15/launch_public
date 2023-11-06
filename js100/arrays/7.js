/* Predict the output of the below code. When you run the code, do you see
what you expected? Why or why not? */

/* I predict that this will return true because with the complete equality
operator the arrays need both the same length and same elements, which
they do. 

I was totally wrong. You can do what I said with strings, but not arrays. This
is because arrays are objects, not primitives. The strict equality operator 
with objects checks if the two inputs are the same object, as in, reference the
same location in memory. Here, they are two different arrays at two different
locations.*/

let array1 = [2, 6, 4];
let array2 = [2, 6, 4];

console.log(array1 === array2);