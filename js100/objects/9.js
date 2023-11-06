/* Write code that does the reverse, starting from a nested array of pairs
and building an object */

let nestedArray = [["title", "Duke"], ["name", "Nukem"], ["age", 33]];

let person = {};

for (i = 0; i < nestedArray.length; i += 1) {
  let pair = nestedArray[i];
  person[pair[0]] = pair[1];
}

console.log(person);