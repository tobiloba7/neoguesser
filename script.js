"use strict";
let currentScore = 10;
let highScore = 0;
let secretNum = Math.floor(Math.trunc(Math.random() * 20) + 1);
//functions
const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};
const displayNumber = function (number) {
  document.querySelector(".number").textContent = number;
};

const check = function () {
  let guess = Number(document.querySelector(".guess").value);

  if (!guess) {
    displayMessage("oops no numbers!");
  } else if (guess == secretNum) {
    document.querySelector("body").classList.add("win");
    document.querySelector(".number").style.width = "30rem";
    displayMessage("yay correct answer!");
    displayNumber(secretNum);
    if (currentScore > highScore) {
      highScore = currentScore;
    }
    document.querySelector(".highscore").textContent = highScore;
  } else if (guess != secretNum) {
    if (currentScore > 1) {
      displayMessage(guess > secretNum ? "go lower.." : "go higher..");
      currentScore--;
      document.querySelector(".score").textContent = currentScore;
    } else {
      displayMessage("you just lost the game :(");
      document.querySelector(".score").textContent = 0;
    }
  }
};
// ---------------------------------

document.querySelector(".check").addEventListener("click", check);

document.querySelector(".guess").addEventListener("keydown", function (e) {
  if (e.code === "Enter") check();
});

document.querySelector(".again").addEventListener("click", function () {
  currentScore = 10;
  document.querySelector(".score").textContent = currentScore;
  secretNum = Math.floor(Math.trunc(Math.random() * 20) + 1);
  displayMessage("lets go again");
  document.querySelector(".guess").value = "";
  document.querySelector("body").classList.remove("win");
  document.querySelector(".number").style.width = "15rem";
  displayNumber("?");
});
