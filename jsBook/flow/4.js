// What does the following code log to the console, and why?

/* I'm afraid it will log 3 of them because there are no break statements. So,
once it hits the correct case, which is the second one, it'll just keep going
until it runs out of the block after the default message. */
function barCodeScanner(serial) {
  switch (serial) {
    case "123":
      console.log("Product1");
    case "113":
      console.log("Product2");
    case "142":
      console.log("Product3");
    default:
      console.log("Product not found!");
  }
}

barCodeScanner("113");