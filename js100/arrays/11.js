/* We have made a grocery list, and as we check off items on that list, we
would like to remove them. Write code that removes the items from 
"groceryList" one by one, until it is empty. */

let groceryList = ['paprika', 'tofu', 'garlic', 'quinoa', 'carrots', 'broccoli', 
'hummus'];

while (groceryList.length > 0) {
  let item = groceryList.shift();

  console.log(item);
}

console.log(groceryList);