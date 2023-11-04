let mario = document.getElementById("mario");
let imgMario = mario.querySelector("img");

// Setting the source of image to mario-stand.gif
// imgMario.src = "./assets/mario-stand.gif";
imgMario.src = "./assets/mario-walk.gif";

// Creating a variable to store the interval ID
let walkInterval;

// // Function to stop Mario
// function stopMario() {
//   imgMario.src = "./assets/mario-stand.gif";
//   clearInterval(walkInterval); // Clear the walk interval if it's set
// }

// Creating a function moveMario, that will listen to keyboard events
function moveMario() {
  document.addEventListener("keydown", function (event) {
    // Check if the 'ArrowLeft' or 'ArrowRight' key was pressed
    if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
      // Avoid starting multiple intervals
      if (!walkInterval) {
        // Check if src attribute is set to mario-walk.gif, if not, set it
        if (imgMario.src.indexOf("mario-walk.gif") === -1) {
          imgMario.src = "./assets/mario-walk.gif";
        }

        // Start walking in a loop (updating position)
        walkInterval = setInterval(function () {
          // Update Mario's position here
          // For example, update mario.style.left to move Mario
        }, 100); // Adjust the interval time as needed
      }

      // Apply styles based on the arrow key pressed
      if (event.key === "ArrowLeft") {
        mario.style.transform = "scaleX(-1)";
        mario.style.transition = "transform 0.5s";
      } else if (event.key === "ArrowRight") {
        mario.style.transform = "scaleX(1)";
        mario.style.transition = "transform 0.5s";
      }
    }
  });

  // --------------------------------------------------------------
  // MARIO, DANCE!
  // --------------------------------------------------------------
  let plexico = document.getElementById("plexico");

  document.addEventListener("keydown", function (event) {
    if (event.code === "Space") {
      mario.classList.add("fullHeight");
      document.getElementById("instructions").classList.add("hidden");
      imgMario.src = "./assets/mario-dance-moves.gif";
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
      imgMario.src = "./assets/mario-stand.gif";
      // location.reload(); // Reload the page
    }
  });
  // document.getElementById("danceFrame").style.display = "block";

  // document.addEventListener("keyup", function (event) {
  //   if (event.code === "Escape") {
  //     imgMario.src = "./assets/mario-stand.gif"; // or whatever the previous state was
  //     // document.getElementById("danceFrame").style.display = "none";
  //     mario.classList.add("dancing");
  //   }
  // });

  // Stop mario on keyup
  document.addEventListener("keyup", function (event) {
    if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
      clearInterval(walkInterval); // Stop walking
      walkInterval = null; // Reset the interval ID
      imgMario.src = "./assets/mario-stand.gif"; // Show the still image
    }
  });
}

// --------------------------------------------------------------
// MARIO, MOBILE!
// --------------------------------------------------------------
document.addEventListener("DOMContentLoaded", (event) => {
  let spaceButton = document.getElementById("spaceButton");
  let escapeButton = document.getElementById("escapeButton");
  let leftArrowButton = document.getElementById("leftArrowButton");
  let rightArrowButton = document.getElementById("rightArrowButton");

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
    location.reload();
  });

  leftArrowButton.addEventListener("click", function () {
    mario.style.transform = "scaleX(-1)";
    mario.style.transition = "transform 0.5s";
  });

  rightArrowButton.addEventListener("click", function () {
    mario.style.transform = "scaleX(1)";
    mario.style.transition = "transform 0.5s";
  });
});
//

// Call the moveMario function to start listening for keyboard events
moveMario();
