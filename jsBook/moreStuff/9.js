/* This exercise has nothing to do with this chapter. Instead, it
uses concepts you learned earlier in the book. If you can't figure out
the answer, don't worry: this question can stump developers with more
experience than you have.

Earlier, we learned that JavaScript has multiple versions of the
numeric value zero. In particular, it has 0 and -0. While it's
mathematically nonsensical to distinguish between 0 and -0, they are
distinct values in JavaScript. We won't get into why JavaScript has
a 0 and -0, but it can be useful in some cases.

There's a problem, however: JavaScript itself doesn't seem to realize
that the values are distinct: 

0 === -0  ==> true
String(-0) ==> "0"

Fortunately, you can use Object.is to determine whether a value is -0:

let value = -0;
Object.is(value, 0) ==> false

Object.is(value, -0) ==> true

There are other ways to detect a -0 value. Without using Object.is, write a
function that will return true if the argument is -0, and false if it
is 0 or any other number */

function isNegativeZero(value) {
  return 1 / value === -Infinity;
}

/*

MY FIRST TRY:

function neg0(number) {
  if((number > -1) && (number < 1) && (number.toString().length === 1)) {
    return true;
  } else {
    return false;
  };
};

console.log(neg0(-0));
console.log(neg0(0));
console.log(neg0(-1));
console.log(neg0(1));
console.log(neg0(15));

*/

console.log(isNegativeZero(-0));
console.log(isNegativeZero(0));
console.log(isNegativeZero(-1));
console.log(isNegativeZero(1));
console.log(isNegativeZero(15));