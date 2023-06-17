// ANIMATION
// const observer = new IntersectionObserver(entries => {
//   entries.forEach(entry => {
//     if (entry.isIntersecting) {
//       document.querySelectorAll(".animated")[0].classList.add("fadeInLeft");
//       document.querySelectorAll(".animated")[1].classList.add("fadeInTop");
//       document.querySelectorAll(".animated")[2].classList.add("fadeInRight");
//     }
//   })
// })

// observer.observe(document.querySelector(".container"));

// -------------------------------------------------------------------

// ANIMATION PREFACE
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      document.querySelectorAll(".animated-100")[0].classList.add("fadeInLeft");
      document.querySelectorAll(".animated-100")[1].classList.add("fadeInRight");
    }
  })
})

observer.observe(document.querySelector(".container-100"));

// MENÜFARBE ÄNDERN
// document.getElementsById('Preface')

// function scrollValue() {
//   var navbar = document.getElementById('Preface');
//   var scroll = window.scrollY;
//   if (scroll < 200) {
//       navbar.classList.remove('BgColour');
//   } else {
//       navbar.classList.add('BgColour');
//   }
// }

// window.addEventListener('scroll', scrollValue);


// 2. Versuch:
// https://www.youtube.com/watch?v=Tdkuk9uDTfM

// const header = document.querySelector(".main-header")

// window.onscroll = function(){
//   var top = window.scrollY;
//   console.log(top)
//   if (top>=976){
//     header.classList.add('active')
//   }else{
//     header.classList.remove()
//   }
// }
