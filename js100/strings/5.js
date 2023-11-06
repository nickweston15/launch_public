/* Given string like the following, how can you check whether they're equal
irrespective of whether the characters they contain are upper or lower case? */

/* I thought this might be a question of using == vs === but was wrong. You
can use the built in .toLowerCase function as shown below. */

let string1 = "Polar Bear";
let string2 = "Polar bear";
let string3 = "Penguin";

console.log(string1.toLowerCase() === string2.toLowerCase());
console.log(string1.toLowerCase() === string3.toLowerCase());
console.log(string2.toLowerCase() === string3.toLowerCase());