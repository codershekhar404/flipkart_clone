// Preloader
var preload = document.getElementById('load');

function loading() {
  preload.style.display = 'none';
}
// preloader end

var slide = document.querySelector(".slideshow");
var slideImg = document.querySelectorAll(".slideshow img");
var offerImg = document.querySelector(".offer img");

// Buttons
const prevBtn = document.querySelector("#prevBtn");
const nextBtn = document.querySelector("#nextBtn");

// Counter
let counter = 1;
const size = slideImg[0].clientWidth;
slide.style.transform = "translateX(" + -size * counter + "px)";

// Button Listeners

// Next Button Function
nextBtn.addEventListener("click", () => {
  if (counter >= slideImg.length - 1) return;
  slide.style.transition = "transform 0.4s ease-in-out";
  counter++;
  slide.style.transform = "translateX(" + -size * counter + "px)";
});

// Prev Button Function
prevBtn.addEventListener("click", () => {
  if (counter <= 0) return;
  slide.style.transition = "transform 0.4s ease-in-out";
  counter--;
  slide.style.transform = "translateX(" + -size * counter + "px)";
});

// Transitioned Function
slide.addEventListener("transitionend", () => {
  if (slideImg[counter].id == "lastClone") {
    slide.style.transition = "none";
    counter = slideImg.length - 2;
    slide.style.transform = "translateX(" + -size * counter + "px)";
  }
  if (slideImg[counter].id == "firstClone") {
    slide.style.transition = "none";
    counter = slideImg.length - counter;
    slide.style.transform = "translateX(" + -size * counter + "px)";
  }
});

if (window.innerWidth <= 820) {
  offerImg.src = "img/offerMobile.jpeg";
  var imgArr = Array.from(slideImg);
  imgArr[0].src = "img/offer3tab.jpg";
  imgArr[1].src = "img/offer1tab.webp";
  imgArr[2].src = "img/offer2tab.webp";
  imgArr[3].src = "img/offer3tab.jpg";
  imgArr[4].src = "img/offer1tab.webp";
}
if (window.innerWidth <= 750) {
  offerImg.src = "img/offerMobile.jpeg";
  imgArr[0].src = "img/offer3mobile.jpg";
  imgArr[1].src = "img/offer1mobile.jpg";
  imgArr[2].src = "img/offer2mobile.jpg";
  imgArr[3].src = "img/offer3mobile.jpg";
  imgArr[4].src = "img/offer1mobile.jpg";
}

// Automatic Sliding Animation
setInterval(() => {
  if (counter >= slideImg.length - 1) return;
  slide.style.transition = "transform 0.4s ease-in-out";
  counter++;
  slide.style.transform = "translateX(" + -size * counter + "px)";
}, 4000);
