/* Using the code below as a starting point, write a while loop that logs
the elements of array at each index, and terminates after logging the
last element of the array. */

let array = [1, 2, 3, 4];
let index = 0;

while (index <= array.length - 1) { // I made this complicated, drop the = and -1
  console.log(array[index]);
  index += 1;
}