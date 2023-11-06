/* We've been given an array of vocabulary words grouped into sub-arrays
by meaning. This is a two-dimensional array or a nested array. Write some
code that iterates through the sub-arrays and logs each vocabulary word
to the console. */

let vocabulary = [
  ['happy', 'cheerful', 'merry', 'glad'],
  ['tired', 'sleepy', 'fatigued', 'drained'],
  ['excited', 'eager', 'enthused', 'animated']
];

for (i = 0; i < vocabulary.length; i += 1) {
  console.log(vocabulary[i]);
}

/* You could also use nested for loops like this...

for (let vocabularyIdx = 0; vocabularyIdx < vocabulary.length; vocabularyIdx++) {
  let synonyms = vocabulary[vocabularyIdx];

  for (let synonymIdx = 0; synonymIdx < synonyms.length; synonymIdx++) {
    console.log(synonyms[synonymIdx]);
  }
} */
