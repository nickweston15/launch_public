/* Identify all of the variables, object property names, primitive values,
and objects shown in the following code. This problem is even more challenging
than the previous one.*/

function bar(arg1, arg2) {
  let foo = "Hello";
  const qux = {
    abc: [1, 2, 3, [4, 5, 6]],
    def: null,
    ghi: NaN,
    jkl: foo,
    mno: arg1,
    pqr: arg2,
  };

  return qux;
}

let result = bar("Victor", "Antonina");

/*

Variables: bar, arg1, arg2, foo, qux, result

Object Property Names: abc, def, ghi, jkl, mno, pqr, and all of the array indicies (0,
1, 2, 3 for the outer array and 0, 1, 2, for the nested array)

Primitive Values: "Hello", 1, 2, 3, 4, 5, 6, and all of the array indicies (0,
1, 2, 3 for the outer array and 0, 1, 2, for the nested array), "abc", "def",
"ghi", "jkl", "mno", "pqr", null, NaN, "Victor", "Antonina"

Objects: the whole bar function, the whole qux object, the outer and inner array
value for the abc key

*/