// What happens when you run the following code? Why?

/* At first, everything will work as intended and it will log the first three
greetings to Victor to the console using template literals. However, since NAME
was declared with const and not let, it is immutable and you cannot change it
from "Victor" to "Joe". Therefore, it will then return a TypeError, assignment
to a constant variable. */

const NAME = 'Victor';
console.log('Good Morning, ' + NAME);
console.log('Good Afternoon, ' + NAME);
console.log('Good Evening, ' + NAME);

NAME = 'Joe';
console.log('Good Morning, ' + NAME);
console.log('Good Afternoon, ' + NAME);
console.log('Good Evening, ' + NAME);