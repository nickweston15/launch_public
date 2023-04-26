// What does the following code log to the console?

/* It FEELS like a trick but I'm not sure why this wouldn't just log: "Yipeee!!!!"

EDIT: Indeed it was. When the computer hits the return statement in a function,
then it terminates the function, so it never reaches the console.log statement. */

function scream(words) {
  words = words + "!!!!";
  return;
  console.log(words);
}

scream("Yipeee");