// What will the following statements return?

let tweet = "I'm learning to program! Woooot :-) #javascript #launchschool";

let words = tweet.split(" ");
let isValid = tweet.length < 140;

typeof tweet;   // I think "string"
typeof words;   // I think "object" because it makes an Array which is an Object
typeof isValid; // I think "boolean"