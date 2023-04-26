/* Identify all of the variables, object property names, primitive values,
and objects shown in the following code (assume the code has not
been executed). Don't panic if you miss a few items - this exercise
is more challenging than it looks. */

function hello(greeting, name) {
  return greeting + " " + name;
}

function xyzzy() {
  return { a: 1, b: 2, c: [3, 4, 5], d: {} };
}

const howdy = hello("Hi", "Grace");
let foo = xyzzy();

/*

Variables: hello, greeting, name, xyzzy, howdy, foo

Object Property Names: a, b, c, d, return for both functions. EDIT: missed the
array indices 0, 1, and 2.

Primitive Values: " ", 1, 2, 3, 4, 5, "Hi", "Grace" EDIT: missed "a", "b", "c", "d",
(because Object Property Names are usually strings) and 0, 1, 2 (array indices
that are technically there as keys for the array object, you just don't see them).

Objects: function hello(), function xyzzy(), array within return statement of
function xyzzy() and the array value for key c, and the blank object value for
key d, 

*/