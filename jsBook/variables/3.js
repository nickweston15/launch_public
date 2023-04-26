// What happens when you run the following program? Why do we get that result?


/* This program will return Type Error Undefined, because foo is defined within
a code block and the console.log() function is called outside of the code block.

EDIT: It's a ReferenceError, but the point stands.*/

{
  let foo = 'bar';
}

console.log(foo);
