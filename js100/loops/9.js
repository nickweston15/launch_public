/* Loop over the elements of the array fish, logging each one. Terminate
the loop immediately after logging the string "Nemo" */

let fish = ["Dory", "Marlin", "Gill", "Nemo", "Bruce"];

for(i = 0; i < fish.length; i += 1) {
  if(fish[i] === "Nemo") {
    console.log(fish[i]);
    break;
  } else {
    console.log(fish[i]);
  }
}