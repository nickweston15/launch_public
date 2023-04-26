let a = 6;

switch(a) {
  case 5:
    console.log("a is 5");
    break;
  case 6: // Interesting that you can't use a function do something within a case
    console.log("a is 6");
    function double(num) {
      num = num * 2
    }
    double(a);
    console.log(a);
    break;
  default:
    console.log("a is neither 5, nor 6");
    break;
}

console.log(a);