/* The destinations array contains a list of travel destinations. Write a function
that checks whether or not a particular destination is included within
destinations, without using the built-in method Array.prototype.includes(). */

let destinations = ['Prague', 'London', 'Sydney', 'Belfast', 'Rome',
  'Aruba', 'Paris', 'Bora Bora', 'Barcelona', 'Rio de Janeiro',
  'Marrakesh', 'New York City'];

function contains(value, arr) {
  for (i = 0; i < arr.length; i += 1) {
    if (arr[i] == value) {
      return true;
    } 
  }
  return false;
}

console.log(contains("Barcelona", destinations));
console.log(contains("Nashville", destinations));