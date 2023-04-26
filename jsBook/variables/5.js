// Take a look at this code snippet. What does the program log to the console? Why?

/* This program will log "qux" to the console because since foo was initially
initialized in the global scope, the reassignment in the block will work as 
intended and change the value stored in the foo memory.

EDIT: I was wrong here and easy to see why. Yes, the variable foo does get
reassigned, but only within the block. Once we hit line 14, the computer thinks
that foo is now equal to bar again, so that's what it ends up logging.*/

let foo = "bar";
{
  let foo = "qux";
}

console.log(foo);