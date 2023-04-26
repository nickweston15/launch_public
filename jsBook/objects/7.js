/* Add a qux property with value 3 to the myObj object we created in the previous
exercise. Now, examine the following code snipets and without running this code,
can you determine whether these two snippets produce the same output? Why? */

/* So really this is a question of: do both .forEach and for/in loops iterate
over the prototype keys and the added key and log them. I am thinking that 
.forEach will, because we have extracted the keys into a new array and the 
.forEach function doesn't know about the prototype array, it's just
focused on doing the callback function to the new array objKeys. 
I am thinking that the for/in loop will also iterate over both the protoype
and added key. 

EDIT: Well I was exactly wrong here. for/in loops iterate over all of the keys,
prototype and the added one. The .forEach function only iterates on the own keys
of the given array of an objects keys.*/



// Code from previous exercise 5
let myProtoObj = {
  foo: 1,
  bar: 2,
};

let myObj = Object.create(myProtoObj);

// Adding a qux property with value 3
myObj.qux =3;

// Snippet 1
let objKeys = Object.keys(myObj);
objKeys.forEach(function(key) {
  console.log(key);
});

// Snippet 2
for (let key in myObj) {
  console.log(key);
}