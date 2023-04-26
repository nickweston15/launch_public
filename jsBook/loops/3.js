// The following code causes an infinite loop. Why?

/* The while loops starts with the counter at 1, prints it, then increases
it to 2 with the incremental iterator statement. However, the code only
executes if the counter = 1, so since it now equals 2, it doesn't execute, 
and thus the counter doesn't get increased. Thus, it never gets > 2 to 
hit the break statement. */




/* let counter = 0;

while (counter = 1) {
  console.log(counter);
  counter += 1;

  if (counter > 2) {
    break;
  }
} */