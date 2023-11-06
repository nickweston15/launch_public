/* What will the following code log to the console and why? 
Don't run it until you have tried to answer. */

/* This will log "Jane", "Doe" because even though you assign a.firstName
as John, it cannot be reassigned, but it can be mutated. So then the code mutates
it to Jane and logs the result. */

const a = {
  firstName: 'John',
  lastName: 'Doe'
};

function myFunction() {
  a.firstName = 'Jane';
}

myFunction();

console.log(a);