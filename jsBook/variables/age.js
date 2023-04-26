/* Write a program named age.js that includes someone's age and then
calculates and reports the future age in 10, 20, 30 and 40 years. */

let currentAge = 25;

function futureAges(age) {
  console.log(
    `You are ${age} years old.
    In 10 years, you will be ${age + 10} years old.
    In 20 years, you will be ${age + 10} years old.
    In 30 years, you will be ${age + 30} years old.
    In 40 years, you will be ${age + 40} years old.`
  )
};

futureAges(currentAge);