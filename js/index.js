// let header = document.querySelector(".navbar");
// let lastScrollValue = 0;

// document.addEventListener('scroll', () => {
//     let top = document.documentElement.scrollTop;
//     if (lastScrollValue < top) {
//         navbar.classList.add("hidden");
//     } else {
//         navbar.classList.remove("hidden");
//     }
//     lastScrollValue = top;
// });

//-------------------- Header -------------------- //

var lastScrollTop = 0;
navbar = document.getElementById("navbar");
window.addEventListener("scroll", function () {
  var scrollTop = window.pageYOffSet || document.documentElement.scrollTop;
  if (scrollTop > lastScrollTop) {
    navbar.style.top = "-70px";
  } else {
    navbar.style.top = "0";
  }
  lastScrollTop = scrollTop;
})

//-------------------- Hamburger -------------------- //

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}))

//-------------------- Carousel -------------------- //

var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

//-------------------- Slider (Commentaires) -------------------- //

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = x.length };
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex - 1].style.display = "block";
}