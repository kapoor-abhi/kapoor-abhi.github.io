const images = [
  "images/photo1.jpg",
  "images/photo2.jpg",
  "images/photo3.jpg"
];

let index = 0;
const hero = document.getElementById("hero-img");

setInterval(() => {
  index = (index + 1) % images.length;
  hero.src = images[index];
}, 5000);