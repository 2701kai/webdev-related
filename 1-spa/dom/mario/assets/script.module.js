/*Task 4: moveMario.js import:  */
import { moveMario } from "./moveMario.js";

let mario = document.getElementById("mario");
let imgMario = mario.querySelector("img");
//for Task 4:
let lastDirection = "right";

/* Task 3:
 Create a function stopMario, that will stop Mario when it's called
Hint: use src attribute to change .gif.*/
let isMarioWalking = false;

function stopMario() {
  imgMario.src = "./assets/mario-stand.gif";
  isMarioWalking = false;
}

function startMario() {
  if (!isMarioWalking) {
    imgMario.src = "./assets/mario-walk.gif";
    isMarioWalking = true;
    moveMario(); // Start the movement
  }
}

function toggleMario() {
  if (isMarioWalking) {
    stopMario();
  } else {
    startMario();
  }
}

// Initialize the event listener
// moveMario();
