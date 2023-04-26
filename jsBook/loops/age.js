/* Modify the age.js program you wrote in the exercises for the Input/Output
chapter. The updated code should use a for loop to display the future ages. */

let rlSync = require("readline-sync");
let currentAge = parseInt(rlSync.question("How old are you?\n"));
console.log(`You are ${currentAge} years old.\n`)

for(let future = 10; future <= 40; future += 10) {
  console.log(`In ${future} years, you will be ${currentAge + future} years old.`)
}