const hiddenElements = document.querySelectorAll('.entry');
const debounceTime = 200; // Adjust the delay time as needed

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.remove('fade');
        entry.target.classList.add('active');
      } else {
        entry.target.classList.remove('active');
        entry.target.classList.add('fade');
      }
    });
  },
  { threshold: 0.5 }
);
hiddenElements.forEach((element) => observer.observe(element));
// observer for the 1st section
//header-info
const headerInfo = document.querySelector('.hero-info');
const heroImg = document.querySelector('.hero-img');
const heroElements = [headerInfo, heroImg];
