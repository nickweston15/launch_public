/* What are the return values of the statements on lines 3 to 5? Refer to MDN
documenation about the Array object for help. */

/* I think the return values will be:
- "palm tree" because it's in the index that is called
- "palm tree" becaused the .pop() method returns the value it removes
- "sequoia" because it is now in the index that is called */

let trees = ["birch", "pine", "sequoia", "palm tree"];

trees[trees.length - 1];
trees.pop();
trees[trees.length - 1];