// Convert the person object into a nested array containing the same key-value pairs

let person = {
  title: "Duke",
  name: "Nukem",
  age: 33
};

// let nestedPerson = Object.entries(person);

let nestedPerson = [];

for (let property in person) {
  nestedPerson.push([property, person[property]]);
}

console.log(nestedPerson);