/* We are experimenting with some code to get more comfortable working with objects.
Run the snippet below and explain why "It's true!" is never output. */

/* It's never output because object property names are always strings, whereas
the if statement is looking for a boolean true, not a string "true". */

let obj = {
  num: 42,
  "property name": "string value",
  true: false,
  fun: function() {
    console.log("Harr Harr!");
  },
};

for (let prop in obj) {
  if (prop === true) {
    console.log("It's true!");
  }
}