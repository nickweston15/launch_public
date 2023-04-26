// What does this code output to the console?

/* This will log "Empty" because we passed an empty array to isArrayEmpty,
which is falsy and will invoke the else statement.

EDIT: Ok missed this one bad. It will log "Not Empty" because for some reason
an empty array isn't falsy, it's truthy. */

function isArrayEmpty(arr) {
  if(arr) {
    console.log("Not Empty");
  } else {
    console.log("Empty");
  }
}

isArrayEmpty([]);