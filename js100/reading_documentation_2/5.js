// Find out what Date.now() returns

// The Date objects is a single point in time since 1/1/1970 (the epoch)

console.log(Date.now()); // Returns milliseconds since the epoch

// For days, you can do this.
let days = Date.now() / 86400000;
console.log(days);