/* In your JavaScript console, execute the following two lines of code to check
whether their return values differ and if so, how. Take a look at the MDN
documentation on equality comparisons to read about how == and === differ. */

/* I think these will differ because the first uses the loose equality operator
and the second one uses the strict equality operator. The first will return true
because it tries to coerce the string to a number and is successful, so it
evalutes 8 to 8 which is true. The second will be false because it evaluates
both type and value, so since string "8" is a different type than number 8,
it returns false. */

"8" == 8;
"8" === 8;