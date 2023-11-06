/* What happens if we take the array ["fish", "and", "chips"] and try to access
the element at index position 10? Try this in your JavaScript console. */

/* I think this will return a Reference Error since we are trying to reference
an index that doesn't exist. 

EDIT: I was wrong, it just returns undefined. */

console.log(["fish", "and", "chips"][1]);

let array = ["fish", "and", "chips"];
console.log(array[10]);