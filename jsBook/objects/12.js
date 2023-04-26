/* As written, this code will raise an error on line 10. Without creating
a new function or changing lines 9 or 10, update this code to work as intended. */

/*
function foo(bar) {
  console.log(bar, bar, bar);
}

foo("hello"); // should print "hello hello hello"
bar("hi");    // should print "hi hi hi"
*/

function foo(bar) {
  console.log(bar, bar, bar);
}

let bar = foo;

foo("hello"); // should print "hello hello hello"
bar("hi");    // should print "hi hi hi"