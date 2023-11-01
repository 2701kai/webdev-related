export function moveMario() {
  let isMoving = false;

  window.addEventListener("keydown", function (event) {
    if (event.key === "ArrowRight" || event.key === "ArrowLeft") {
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

  function animateMario(direction) {
    if (isMoving && isMarioWalking) {
      startMario();

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
}
