// Without running this code, what will it print?

function show(foo = undefined, bar = null) {
  console.log(`foo is ${foo ?? 3}, bar is ${bar ?? 42}`);
}

show(5, 7); // Logs "foo is 5, bar is 7"
show(0, 0); // Logs "foo is 0, bar is 0"
show(4); // Logs "foo is 4, bar is 42"
show(); // Logs "foo is 3, bar is 42"