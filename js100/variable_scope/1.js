/* What will the following code log to the console and why? 
Don't run it until you have tried to answer. */

/* I feel like this is a question of if it will log or not because it's defined
after the console.log() statement because otherwise I think this is fine. I think
an error will be logged to the console because since JS is synchronous, it
won't define greeting before the console.log() statement. I think there will
be a TypeError Undefined.

Ok so no error was logged, but if just logged "undefined". I think this makes
sense because JS is a forgiving language and probably just tried to power
through. Also turns out that any variable used it hoisted to the top of the
code and declared initially with undefined, which makes sense why that was logged. */

console.log(greeting);
var greeting = "Hello world!";