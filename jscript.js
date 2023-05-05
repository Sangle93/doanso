"use strict";

let soRandom = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let hightScore = 0;

const displayMess = function (mess) {
  document.querySelector(".message").textContent = mess;
};

// document.querySelector(".number").textContent = soRandom;

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  if (!guess) {
    //console.log(Number(document.querySelector(".guess").value), typeof guess);
    displayMess("Chua Nhap So Kia");
  } else if (guess === soRandom) {
    document.querySelector("body").style.backgroundColor = "#33CC33";
    document.querySelector(".message").style.fontSize = "6rem";
    displayMess("Thang Roi");
    document.querySelector(".number").style.width = "30rem";
    document.querySelector(".number").textContent = soRandom;
    if (hightScore < score) {
      hightScore = score;
      document.querySelector(".highscore").textContent = hightScore;
    }

    document.querySelector(".check").style.visibility = "hidden";
    document.querySelector(".again").style.visibility = "visible";
  } else if (guess !== soRandom) {
    if (score > 1) {
      displayMess(guess > soRandom ? "❌ Lon hon" : "❌ Nho hon");
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      displayMess("Thua Nha");
      document.querySelector(".score").textContent = 0;
      document.querySelector("body").style.backgroundColor = "#880000	";
      document.querySelector(".message").style.fontSize = "6rem";
      document.querySelector(".check").style.visibility = "hidden";
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  soRandom = Math.trunc(Math.random() * 20) + 1;
  document.querySelector(".number").textContent = soRandom;

  displayMess("Start guessing...");
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "🥳";
  document.querySelector(".guess").value = "";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
  document.querySelector(".message").style.fontSize = "2rem";
  document.querySelector(".check").style.visibility = "visible";
  document.querySelector(".again").style.visibility = "hidden";
});
