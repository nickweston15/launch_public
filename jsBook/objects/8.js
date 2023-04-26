/* Create a function that creates and returns a copy of an object.
The function should take two arguments: the object to copy and
an array of the keys that you want to copy. Do not mutate the original object.

The function should let you omit the array of keys argument when
calling the function. If you do omit the argument, the function
should copy all of the existing keys from the object. */

function copyObj(originalObj, arrayOfKeys) {
  let blank = {};

  if(arrayOfKeys) {
    arrayOfKeys.forEach(function(key) {
      blank[key] = originalObj[key];
    });

    return blank;
  } else {
    return Object.assign(blank, originalObj);
  }
}

let objToCopy = {
  foo: 1,
  bar: 2,
  qux: 3,
};

let newObj = copyObj(objToCopy);
console.log(newObj);

let newObj2 = copyObj(objToCopy, ["foo", "qux"]);
console.log(newObj2);

let newObj3 = copyObj(objToCopy, ["bar"]);
console.log(newObj3);