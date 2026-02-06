const images = [
  "images/photo1.png",
  "images/photo5.png",
  "images/photo3.png",
  "images/photo4.png",
  "images/photo22.png"

];

let index = 0;
const hero = document.getElementById("hero-img");

setInterval(() => {
  index = (index + 1) % images.length;
  hero.src = images[index];
}, 5000);