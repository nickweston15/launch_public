// The function initGamebelow returns an object, refactor it using arrow syntax

/*

let initGame = function () {
  return {
    level: 1,
    score: 0
  }
};

*/

/* The important part here is the () around the {}, because JavaScript does not
treat a statement starting with a { as an object literal, but rather as a block
statement. */

let initGame = () => ({
  level: 1,
  score: 0
});

let game = initGame();

console.log("Level: " + game.level);
console.log("Score: " + game.score);