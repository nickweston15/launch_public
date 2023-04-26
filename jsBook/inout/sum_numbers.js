let rlSync = require("readline-sync");

let number1 = rlSync.question("Enter the first number\n");
let number2 = rlSync.question("Enter the second number\n");
let sum = Number(number1) + Number(number2);

console.log(`The numbers ${number1} and ${number2} add to ${sum}`);

// Time to play around.

let cheersFor = rlSync.question("Who is your favorite college basketball team?\n");

function getRival(cheersFor) {
  switch(cheersFor) {
  case "Louisville":
    return "Kentucky";
    break;
  case "Duke":
    return "North Carolina";
    break;
  case "Missouri":
    return "Kansas";
    break;
  case "Gonzaga":
    return "winning a National Championship";
    break;
  case "Purdue":
    return "making a Final Four";
    break;
  default:
    return "Invalid team, please try again."
    break;
  }
}

let rival = getRival(cheersFor);
console.log(`The main rival for ${cheersFor} is ${rival}!`);