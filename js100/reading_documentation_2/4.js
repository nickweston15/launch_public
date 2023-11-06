/* Find MDN documentation on operator precedence, and use it to find out which
result the expression 4 * 5 + 3 ** 2 / 10 evaluates to. */

/* 

4 * 5 + 9 / 10 ==> exponent first
20 + 9 / 10 =====> multiplication / division from left to right
20 + 0.9 ========> multiplication / division from left to right
20.9 ============> addition 

*/