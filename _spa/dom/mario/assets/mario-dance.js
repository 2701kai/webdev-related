// V1:
document.addEventListener("keydown", function (event) {
  if (event.code === "Space") {
    imgMario.src = "./assets/mario-dance-moves.gif";
    mario.classList.add("dancing");
  } else if (event.code === "Escape") {
    location.reload(); // Reload the page
  }
});

document.addEventListener("keyup", function (event) {
  if (event.code === "Space") {
    imgMario.src = "./assets/mario-stand.gif";
    mario.classList.remove("dancing");
    mario.style.height = "100vh"; // Make flexbox 100% of the viewport height
    document.getElementById("instruction").classList.add("hidden"); // Hide the instruction div
  }
});

// V2:
