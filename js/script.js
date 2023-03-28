"use strict";

//let userWelcome = prompt("Hi user, to start the game, please write your name");
const confirm =
  userWelcome === "" || userWelcome === null ? "Private user" : userWelcome;

document.querySelector(
  "h1"
).textContent = `Welcome, ${confirm}! Start playing by guessing the number`;

let secretNumber = Math.trunc(Math.random() * 20);
let score = 20;
let highscore = 0;
const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};
document.querySelector(".check").addEventListener("click", function () {
  const guess = +document.querySelector(".guess").value;

  if (!guess) {
    // document.querySelector(".message").textContent = "No number, try again!";
    displayMessage("Not a number, try again!");
  } else if (guess === secretNumber) {
    displayMessage(secretNumber);
    displayMessage("Correct Number!");
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";

    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(
        guess > secretNumber ? "Too high! Try again." : "Too low! Try again."
      );
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "You lost the game!";
      document.querySelector(".score").textContent = 0;
      document.querySelector("body").style.backgroundColor = "rgb(231, 46, 46)";
    }
  }
});
const reset = function () {
  let score = 20;
  let secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector(".score").textContent = score;
  document.querySelector(".guess").value = "";
  displayMessage("Start guessing...");
  displayMessage("?");
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
};
document.querySelector(".again").addEventListener("click", reset);
/* 
Agregar que cuando le de enter, pueda checkear el input
*/
