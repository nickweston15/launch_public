/* The MDN page for Date lists two methods to get the year of a date. What is
the difference between the two methods and which one should you use? */

let today = new Date();

/* This one is not recommended (and in fact is deprecated) because it does not
return the full years. It returns the year of the date invoked minus 1900
Like the year 2000 problem. */
console.log(today.getYear()); 

// Simply returns the full year of the date in local time, like "1923".
console.log(today.getFullYear());
