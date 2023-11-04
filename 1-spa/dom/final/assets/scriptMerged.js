let mario = document.getElementById("mario");
let imgMario = mario.querySelector("img");
let lastDirection = "right";
let isMarioWalking = false;
let isMoving = false;

function stopMario() {
  imgMario.src = "./assets/mario-stand.gif";
  isMarioWalking = false;
}

function startMario() {
  if (!isMarioWalking) {
    imgMario.src = "./assets/mario-walk.gif";
    isMarioWalking = true;
    moveMario();
  }
}

//button:
// function toggleMario() {
//   if (isMarioWalking) {
//     stopMario();
//   } else {
//     startMario();
//   }
// }

function moveMario() {
  window.addEventListener("keydown", function (event) {
    if (
      (event.key === "ArrowRight" || event.key === "ArrowLeft") &&
      isMarioWalking
    ) {
      if (!isMoving) {
        isMoving = true;
        animateMario(event.key);
      }
    }
  });

  window.addEventListener("keyup", function (event) {
    if (event.key === "ArrowRight" || event.key === "ArrowLeft") {
      isMoving = false;
      stopMario();
    }
  });
}

function animateMario(direction) {
  if (isMoving && isMarioWalking) {
    const stepSize = 10;
    let currentPosition = mario.offsetLeft;
    let newPosition = currentPosition;

    if (direction === "ArrowRight") {
      newPosition += stepSize;
      mario.style.transform = "translateX(" + newPosition + "px) scaleX(1)";
      lastDirection = "right";
    } else if (direction === "ArrowLeft") {
      newPosition -= stepSize;
      mario.style.transform = "translateX(" + newPosition + "px) scaleX(-1)";
      lastDirection = "left";
    }

    requestAnimationFrame(() => animateMario(direction));
  } else {
    stopMario();
    if (lastDirection === "left") {
      mario.style.transform = "scaleX(-1)";
    }
  }
}
