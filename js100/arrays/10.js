/* We generated parts of a passcode and now want to combine them into a string.
Write some code that returns a string, with each portion of the passcode
separated by a hyphen. */

let passcode = ['11', 'jZ5', 'hQ3f*', '8!7g3', 'p3Fs'];

console.log(passcode.join("-"));

/* Or this if you wanted to iterate it yourself

let passcode = ['11', 'jZ5', 'hQ3f*', '8!7g3', 'p3Fs'];
let joinedPasscode = '';

for (let i = 0; i < passcode.length; i += 1) {
  if (i > 0) {
    joinedPasscode += '-';
  }

  joinedPasscode += passcode[i];
} */