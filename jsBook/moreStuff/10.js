/* This exercise has nothing to do with this chapter. Instead, it uses
concepts you learned earlier in the book. If you can't figure out the
answer, don't worry: this question can stump developers with more
experience than you have.

Consider this code: 

let x = "5"
x = x + 1 ==> "51"

Now consider this code:

let y = "5"
y++

What gets returned by y++ in the second snippet? Why? */

/* I believe 6 will be logged because when you do ++, a string is coerced
to a number. Thus y = 5 + 1 = 6.

EDIT: Well I was wrong, but it's odd. It does get coerced to a number.
However, the RETURN value is 5 since the post-increment operator (y++)
returns the original value of y, not the incremented value. Thus, be careful
that y++ isn't the exact same thing as y = y + 1.*/


let y = "5"
console.log(y++);  // You can see 5 is returned here.

console.log(y); // Then once you log it, the value logged is 6.