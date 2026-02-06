const images = [
  "images/hero1.jpg",
  "images/hero2.jpg",
  "images/hero3.jpg",
  "images/hero4.jpg"
];

let index = 0;
const hero = document.getElementById("hero-img");

setInterval(() => {
  index = (index + 1) % images.length;
  hero.src = images[index];
}, 5000); // change every 5s