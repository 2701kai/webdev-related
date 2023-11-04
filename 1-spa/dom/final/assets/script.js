let mario = document.getElementById("mario");
let imgMario = mario.querySelector("img");

// Setting the initial source of image to mario-walk.gif
imgMario.src = "./assets/mario-walk.gif";

// Creating a variable to store the interval ID
let walkInterval;

// Function to move Mario on keydown
// function moveMario() {
//   document.addEventListener("keydown", function (event) {
//     if (!walkInterval) {
//       if (imgMario.src.indexOf("mario-walk.gif") === -1) {
//         imgMario.src = "./assets/mario-walk.gif";
//       }

//       walkInterval = setInterval(function () {
//         // Update Mario's position here
//       }, 100); // Adjust the interval time as needed
//     }
//   });
// }

// Adding the functionality for Mario to dance
let plexico = document.getElementById("plexico");
let backgroundVideo = document.getElementById("backgroundVideo");

document.addEventListener("keydown", function (event) {
  if (event.code === "Space") {
    imgMario.src = "./assets/mario-dance-moves.gif";
    mario.classList.add("fullHeight");
    document.getElementById("instructions").classList.add("hidden");
    mario.classList.add("dancing");
    plexico.play();
    backgroundVideo.style.display = "block";
    backgroundVideo.play();
  } else if (event.code === "Escape") {
    mario.classList.remove("fullHeight");
    mario.classList.remove("dancing");
    backgroundVideo.pause();
    backgroundVideo.style.display = "none";
    plexico.pause();
    document.getElementById("instructions").classList.remove("hidden");
    imgMario.src = "./assets/mario-stand.gif"; // Assuming mario-stand.gif is the standing still image.
  }
});

// Add touch support for mobile devices
document.addEventListener("DOMContentLoaded", (event) => {
  let spaceButton = document.getElementById("spaceButton");
  let escapeButton = document.getElementById("escapeButton");

  spaceButton.addEventListener("click", function () {
    mario.classList.add("fullHeight", "dancing");
    document.getElementById("backgroundVideo").style.display = "block";
    document.getElementById("plexico").play();
    document.getElementById("instructions").classList.add("hidden");
    imgMario.src = "./assets/mario-dance-moves.gif";
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
moveMario();
