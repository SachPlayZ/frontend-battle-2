document.getElementById('mobile-menu').addEventListener('click', function() {
    const nav = document.querySelector('.nav-list');
    nav.classList.toggle('showing');
});

// Add event listeners for dropdowns to handle clicks
document.querySelectorAll('.dropdown > a').forEach(dropdown => {
    dropdown.addEventListener('click', function(event) {
        event.preventDefault();
        const dropdownContent = this.nextElementSibling;
        dropdownContent.classList.toggle('show');
    });
});

const slides = document.querySelectorAll('.carousel-slide');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
let currentSlide = 0;

function showSlide(index) {
  if (index >= slides.length) {
    currentSlide = 0;
  } else if (index < 0) {
    currentSlide = slides.length - 1;
  } else {
    currentSlide = index;
  }
  const offset = -currentSlide * 100;
  document.querySelector('.carousel-content').style.transform = `translateX(${offset}%)`;
}

prevButton.addEventListener('click', () => showSlide(currentSlide - 1));
nextButton.addEventListener('click', () => showSlide(currentSlide + 1));

// Auto-play functionality
setInterval(() => showSlide(currentSlide + 1), 5000); // Change slide every 5 seconds


function toggleLetter(letterId) {
  var letterContent = document.getElementById(letterId);
  if (letterContent.style.display === "none" || letterContent.style.display === "") {
      letterContent.style.display = "block";
  } else {
      letterContent.style.display = "none";
  }
}
