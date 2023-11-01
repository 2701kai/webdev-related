/*Task 4: moveMario.js import:  */
import { moveMario } from "./moveMario.js";

let mario = document.getElementById("mario");
let imgMario = mario.querySelector("img");
//for Task 4:
let lastDirection = "right";

/* Task 3:
 Create a function stopMario, that will stop Mario when it's called
Hint: use src attribute to change .gif.*/
let isMarioWalking = true;

function stopMario() {
  imgMario.src = "./assets/mario-stand.gif";
  isMarioWalking = false;
}

function startMario() {moveMario();

function toggleMario() {
  if (imgMario.src.endsWith("mario-walk.gif")) {
    stopMario();
  } else {
    startMario();
  }
}

/*Task 4
Create a function moveMario, that will listen to keyboard events
You could also apply styles globally/outside the function to Mario as needed
Check if src attribute is set to mario-walk.gif if not, set it to mario-walk.gif
Check which arrow key was pressed (arrow left or arrow right) and apply right styles from description below*/
// function moveMario() {
//   let isMoving = false;

//   //   window.addEventListener("keydown", function (event) {
//   //     // if(imgMario.src = !== "./assets/mario-walk.gif" ){
//   //     //     imgMario.src="./assets/mario-walk.gif"
//   //     // }
//   //     // not working, effin' syntax.. changed to:
//   //     if (!imgMario.src.endsWith("mario-walk.gif")) {
//   //       imgMario.src = "./assets/mario-walk.gif";
//   //     }

//   //     const stepSize = 10;
//   //     const currentPosition = mario.offsetLeft;
//   //     let newPosition;

//   //     if (event.key === "ArrowRight") {
//   //       newPosition = currentPosition + stepSize;
//   //     } else if (event.key === "ArrowLeft") {
//   //       newPosition = currentPosition - stepSize;
//   //     } else {
//   //       // If any other key is pressed, do nothing
//   //       return;
//   //     }

//   //     // Apply styles to move Mario to the new position
//   //     mario.style.transform = "translateX(" + newPosition + "px)";
//   //   });
//   // }
//   window.addEventListener("keydown", function (event) {
//     if (event.key === "ArrowRight" || event.key === "ArrowLeft") {
//       if (!isMoving) {
//         isMoving = true;
//         animateMario(event.key);
//       }
//     }
//   });

//   window.addEventListener("keyup", function (event) {
//     if (event.key === "ArrowRight" || event.key === "ArrowLeft") {
//       isMoving = false;
//       stopMario();
//     }
//   });

//   function animateMario(direction) {
//     if (isMoving) {
//       startMario();

//       const stepSize = 10;
//       let currentPosition = mario.offsetLeft;
//       let newPosition;

//       if (direction === "ArrowRight") {
//         newPosition = currentPosition + stepSize;
//         mario.style.transform = "translateX(" + newPosition + "px) scaleX(1)";
//         lastDirection = "right";
//       } else if (direction === "ArrowLeft") {
//         newPosition = currentPosition - stepSize;
//         mario.style.transform = "translateX(" + newPosition + "px) scaleX(-1)";
//         lastDirection = "left";
//       }

//       requestAnimationFrame(() => animateMario(direction));
//     } else {
//       // If Mario was moving left before stopping, keep him facing left
//       if (lastDirection === "left") {
//         mario.style.transform = "scaleX(-1)";
//       }
//     }
//   }
// }

// Initialize the event listener
moveMario();
