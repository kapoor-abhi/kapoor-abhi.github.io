document.addEventListener("DOMContentLoaded", () => {
  const rotImages = document.querySelectorAll('.rot-img');

  if (rotImages.length > 0) {
    let index = 0;
    setInterval(() => {
      rotImages[index].classList.remove('active');
      index = (index + 1) % rotImages.length;
      rotImages[index].classList.add('active');
    }, 4500); // Change image every 4.5 seconds
  }
});