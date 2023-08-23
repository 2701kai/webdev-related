const ball = document.getElementById("ball");
const bounceSound = new Audio("bounce.wav");

const audioStarter = document.querySelector("button");
const court = document.querySelector("body");

let isShotAnimationPlaying = false;

ball.addEventListener("animationstart", (event) => {
  if (event.animationName === "shot") {
    isShotAnimationPlaying = true;
    bounceSound.pause(); 
  }
});


ball.addEventListener("animationend", (event) => {
  if (event.animationName === "shot") {
    isShotAnimationPlaying = false;
  }
});

court.addEventListener("click", () => {
  if (!isShotAnimationPlaying) {
    bounceSound.loop = true;
    bounceSound.play();
  }
});

