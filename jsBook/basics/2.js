// First, we define the original number.
let number = 4936;
console.log(`Original Number: ${number}.`);

/* Now, we take the remainder of that number after it's divided by 10 to get the
ones digit. I'm also going to log all of these to the console for visibility. */
let ones = number % 10;
console.log(`Ones Digit: ${ones}. This was derived by taking the remainder of the
original number divided by 10.`);

/* Now we need to subtract the ones digit from the original number and divide the 
resulting number by 10, essentially shrinking the number to only 3 digits. */
number = (number - ones) / 10;

// Repeat the steps to get the tens and hundreds digits.
let tens = number % 10;
console.log(`Tens Digit: ${tens}. First, we subtracted the ones digit from the 
original number, and then used the same method as before to derive this number.`);
number = (number - tens) / 10;

let hundreds = number % 10;
console.log(`Hundreds Digit: ${hundreds}. Again, used the same method.`);

// For the thousands digit, we can combine the two steps as follows.
let thousands = (number - hundreds) / 10;
console.log(`Thousands Digit: ${thousands}. Final step!`);