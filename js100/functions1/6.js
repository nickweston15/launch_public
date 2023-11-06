/* Write a function that compares the length of two strings. It should return
-1 if the first string is shorter, 1 if the second string is shorter, and 0
if they're of equal length, as in the following example: */

function compareByLength(string1, string2) {
  if (string1.length < string2.length) {
    return -1;
  } else if (string1.length > string2.length) {
    return 1;
  } else {
    return 0;
  }
}

compareByLength("patience", "perseverance");
compareByLength("strength", "dignity");
compareByLength("humor", "grace");