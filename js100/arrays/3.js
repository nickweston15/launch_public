/* We are given the following array of energy sources. Remove "fossil" from
the array, then add "geothermal" to the end of the array */

let energy = ["fossil", "solar", "wind", "tidal", "fusion"]

energy.splice(0,1);
energy.push("geothermal");

console.log(energy);