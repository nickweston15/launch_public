/* Before running any code, determine what difference there will be in the output
of the two code snippets below (if any). */

/* This is tricky. Dot notation just adds "prefix" as a property and then we
change that value of the "prefix" property to "Pacific". However, bracket
notation accepts expressions like variables so that one looks up the value of
the prefix variable, which is "Indian" and makes that the property, then we
make the value of the "Indian" property, "Pacific". */

// Snippet 1
let ocean = {};
let prefix = "Indian";

ocean.prefix = "Pacific";

console.log(ocean);

// Snippet 2
let ocean = {};
let prefix = "Indian";

ocean[prefix] = "Pacific";

console.log(ocean);