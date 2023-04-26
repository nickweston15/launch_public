// Will this program produce an error when run? Why or why not

/* I'm thinking that yes it will produce an error because like I mentioned
previously, since the variable was initialized in the global scope, the 
reassignment within the block will happen. When the computer tries to do it,
it will get a TypeError, reassignment to a constant. However, it shouldn't
have a problem logging "bar" to the console.

EDIT: I was wrong again. If you declare a new const within a code block,
apparently that is completely separate from the one declared in global scope.
Thus, the computer doesn't give an error. Interestingly enough, if you
put a console.log() function for FOO within the code block, it also
returns "qux" as intended, without any error. */

const FOO = "bar";
{
  const FOO = "qux";
}

console.log(FOO);