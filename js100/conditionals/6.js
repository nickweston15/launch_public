/* Take your code from the previous Check the Weather exercise and rewrite
it as a switch statement. Feel free to add more cases besides "sunny" and 
"rainy". */

let weather = "cloudy with a chance of meatballs";

switch (weather) {
  case "sunny":
    console.log("It's a beautiful day!");
    break;
  case "rainy":
    console.log("Grab your umbrella.");
    break;
  case "cloudy":
    console.log("Why so sirius?");
    break;
  case "60 degrees, sunny, late September in Columbus walking to OSU game from Iuka":
    console.log("Is this heaven?")
    break;
  case "cloudy with a chance of meatballs":
    console.log("There's a leek in the boat!")
    break;
  default:
    console.log("Let's stay inside.");
}