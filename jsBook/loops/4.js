/* Does the following code produce an error? Why or why not? What output does this
code send to the console? */

/* Yes, it'll produce an infinite loop because we didn't give it any
incremental iterator statement. It will log 1 continuously.

EDIT: Sigh, I was very wrong. All the componenets of the for loop are optional,
thus there is no error. Also, the incremental iteratoration within the 
console.log() function is acceptable and takes care of the infinite
loop problem.*/

for (let i = 0; i < 5;) {
  console.log(i += 1);
}