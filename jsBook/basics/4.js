// Explain why this code logs "510" instead of 15.

/* The statement below logs 510 instead of 15 because of a concept called
implicit coercion. If any part of an expression is in the form of a String
constructor, such as "5" in this expression, then JavaScript will coerce the
rest of the data types to be strings as well. Thus, even though 10 doesn't 
include the "" and is in the form of a Number constructor, JavaScript coerces
it into a String and then concatenates "5" + "10" to be "510". */

console.log("5" + 10);