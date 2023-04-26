/* In the code below, identify the following terms:

function arguments: 2, 3, 4
function body: everything within the {}
function declaration: everything from function to the }
function invocation: multiplyNumbers(2,3,4);
function name: multiplyNumbers
function parameters: num1, num2, num3
function return value: return result; (which in this case would equal 24)
names of all variables in the program: multiplyNumber, num1, num2, num3, result,
and product

*/

function multiplyNumbers(num1, num2, num3) {
  let result = num1 * num2 * num3;
  return result;
}

let product = multiplyNumbers(2,3,4);