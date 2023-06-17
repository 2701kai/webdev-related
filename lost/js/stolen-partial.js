// IMAGE LOADER
let loaderWrapper = document.querySelector(".image-loader-wrapper");
window.addEventListener("load", function () {
  // loaderWrapper.style.display = "none";
  setTimeout(function () {
    loaderWrapper.parentElement.removeChild(loaderWrapper);
  }, 900);
});

// HOME ??????
// HOME IMAGE
// Reference de l'element DOM <div class="main-container-background"></div>
// https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector
const element = document.querySelector(".main-container-background");

// Petit snippet pour preloader une image en JavaScript
// Une fois l'image chargeée, on applique le style CSS avec du JS
// Et on anime l'image :)
const img = new Image();
// img.src = "./assets/vincentiu-solomon-hq-unsplash.jpg";
img.src = ./assets/galaxy.jpg
// img.src = "./assets/";
img.decode().then(() => {
  element.style.backgroundImage = "url(" + img.src + ")";

  // Animation opacity: 0 à 1
  gsap.fromTo(
    element,
    {
      autoAlpha: 0,
    },
    {
      autoAlpha: 1,
      duration: 1,
      ease: "power3.out",
    }
  );

  // Animation de scale
  gsap.fromTo(
    element,
    {
      scale: 1.25,
    },
    {
      scale: 1,
      duration: 10,
      ease: "power3.out",
    }
  );
});

// Animation Timeline
const timeline = gsap.timeline({
    paused: true,
  });
  timeline.fromTo(
    document.querySelectorAll(".js-stagger"),
    {
      // querySelectorAll et pas querySelector pour en choper + que le premier element
      x: -10,
      autoAlpha: 0,
    },
    {
      x: 0,
      autoAlpha: 1,
      stagger: 0.75,
      duration: 1,
      ease: "power3.inOut",
    },
    1
  );

// HEADER
timeline.fromTo(
    document.querySelector(".header-container"),
    1,
    {
      y: "-100%",
    },
    {
      y: "0%",
      ease: "power2.out",
    },
    4
  );
  timeline.restart();