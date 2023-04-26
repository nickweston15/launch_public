function evenOrOdd(num) {
  if (!Number.isInteger(num)) {
    console.log("Not an integer, please try again.")
    return;
  }

  if (num % 2 === 0) {
    console.log("even");
  } else {
    console.log("odd");
  }
}

