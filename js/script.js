document.querySelectorAll(".logo-card").forEach((card) => {
  const img = card.querySelector(".logo-img");
  const defaultSrc = card.getAttribute("data-default");
  const hoverSrc = card.getAttribute("data-hover");

  card.addEventListener("mouseover", () => {
    img.src = hoverSrc;
  });

  card.addEventListener("mouseout", () => {
    img.src = defaultSrc;
  });
});
const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");
const totalSlides = slides.length;
let currentIndex = 0;
const intervalTime = 3000; // Time in milliseconds for each slide

function showSlide(index) {
  // Apply transform to move the slider
  const offset = -index * 100;
  slides.forEach((slide) => {
    slide.style.transform = `translateX(${offset}%)`;
  });

  // Update dots
  dots.forEach((dot, i) => {
    dot.classList.toggle("active", i === index);
  });
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % totalSlides;
  showSlide(currentIndex);
}

// Initial display
showSlide(currentIndex);

// Autoplay
setInterval(nextSlide, intervalTime);

// Optional: Click on dot to navigate to specific slide
dots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    currentIndex = index;
    showSlide(currentIndex);
  });
});
