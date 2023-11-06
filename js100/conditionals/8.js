// Predict the output of the following code:

/* I think that it will only log "No..." because the conditional will only
evaluate to true if both operands are true since it uses the && operator. In
this case false is false and true is true, so not both of the operands
evaluate to true. Thus it will evalute to false and run the else statement. */

if (false && true) {
  console.log("Yes!");
} else {
  console.log("No...");
}