/* Write a function clone that takes an object as an argument and returns a
shallow copy of that argument. A shallow copy returns a new object that is a
copy of the original object. However, only the object itself and any properties
with primitive values are duplicated. Properties that are themselves objects
are copied "by reference" -- that is, only a pointer to the object is copied. */

function clone(obj) {
  return Object.assign({}, obj);
}

let person = {
  title: "Duke",
  name: {
    value: "Nukem",
    isStageName: true
  },
  age: 33
};

let clonedPerson = clone(person);
person.age = 34;

console.log(person.age);
console.log(clonedPerson.age);

person.name.isStageName = false;
console.log(person.name.isStageName);
console.log(clonedPerson.name.isStageName);