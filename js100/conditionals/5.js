/* Take a look at the code below. Without running it, determine what it will log
to the console. If you're not sure, refer to the MDN documentation on switch
statements */

/* I believe this will log "neigh" and potentially "tweet tweet" and "cricket"
as well. "neigh" for sure because we have the case of animal set to horse.
However, with no break statements, I think it will log the others too. */

let animal = "horse";

switch (animal) {
  case "duck":
    console.log("quack");
  case "squirrel":
    console.log("nook nook");
  case "horse":
    console.log("neigh");
  case "bird":
    console.log("tweet tweet");
  default:
    console.log("*cricket*");
}