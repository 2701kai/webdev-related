let mario = document.getElementById("mario");
let imgMario = mario.querySelector("img");

// Add touch support for mobile devices
let spaceButton = document.getElementById("spaceButton");
let escapeButton = document.getElementById("escapeButton");

// Adding the functionality for Mario to dance
let plexico = document.getElementById("plexico");
let backgroundVideo = document.getElementById("backgroundVideo");

// Setting the initial source of image to mario-walk.gif
imgMario.src = "./assets/mario-walk.gif";

document.addEventListener("keydown", function (event) {
  if (event.code === "Space") {
    mario.classList.add("dancing");
    backgroundVideo.style.display = "block";
    // backgroundVideo.classList.add("bg-video");
    backgroundVideo.play();
    plexico.play();
    document.getElementById("instructions").classList.add("hidden");
    imgMario.src = "./assets/mario-dance-moves.gif";
  } else if (event.code === "Escape") {
    mario.classList.remove("dancing");
    backgroundVideo.pause();
    backgroundVideo.style.display = "none";
    plexico.pause();
    document.getElementById("instructions").classList.remove("hidden");
    imgMario.src = "./assets/mario-walk.gif";
  }
});

// Add touch support for mobile devices
document.addEventListener("DOMContentLoaded", (event) => {
  // let spaceButton = document.getElementById("spaceButton");
  // let escapeButton = document.getElementById("escapeButton");
  spaceButton.addEventListener("click", function () {
    mario.classList.add("dancing");
    imgMario.src = "./assets/mario-dance-moves.gif";
    document.getElementById("backgroundVideo").style.display = "block";
    backgroundVideo.play();
    document.getElementById("plexico").play();
    document.getElementById("instructions").classList.add("hidden");
  });

  escapeButton.addEventListener("click", function () {
    // document.getElementById("backgroundVideo").pause();
    // document.getElementById("backgroundVideo").style.display = "none";
    // document.getElementById("plexico").pause();
    // document.getElementById("instructions").classList.remove("hidden");
    // imgMario.src = "./assets/mario-stand.gif";
    location.reload(); // Only uncomment if you want to reload the entire page
  });
});

// Call the moveMario function to start listening for keyboard events
// moveMario();
