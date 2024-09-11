document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelector('.slides');
    const slideImages = document.querySelectorAll('.slides img');
    let currentIndex = 0;
    const totalSlides = slideImages.length;
    const slideInterval = 3000; // Change image every 3 seconds
  
    function showSlide(index) {
      const offset = -index * 100; // Calculate offset for sliding effect
      slides.style.transform = `translateX(${offset}%)`;
    }
  
    function nextSlide() {
      currentIndex = (currentIndex + 1) % totalSlides; // Move to next slide
      showSlide(currentIndex);
    }
  
    setInterval(nextSlide, slideInterval); // Change slide every 3 seconds
  });
  