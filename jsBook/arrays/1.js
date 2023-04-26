// In the following code, what are the final length values for each array?

// 4 because undefined counts as a value when getting the length, unlike unset ones.
let array1 = [1, 2, undefined, 4] ;

// 5 because .length puts in 4 undefined values that count towards length + the OG.
let array2 = [1];
array2.length = 5;

/* 0 because it's an unset array that gets an negative index added, which don't count
towards the length. */
let array3 =[];
array[-3] = [1];

// 3 because it's originally 5 and the .length function removes the last two indices.
let array4 = [1, 2, 3, 4, 5];
array4.length = 3;

/* 1 because it's an unset array that gets 1 index added. 

EDIT: I was wrong here. The length is the highest index position that has a value
plus 1. Thus the length is 101 here. */
let array5 = [];
array5[100] = 3;