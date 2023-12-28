document.addEventListener('DOMContentLoaded', function () {
  // Initialize ScrollReveal
  const sr = ScrollReveal();

  // Configure the reveal settings
  sr.reveal('.default', {
    origin: 'top',
    distance: '50px',
    duration: 1000,
    delay: 200,
    easing: 'cubic-bezier(0.5, 0, 0, 1)',
  });

  // Handle visibility logic on scroll
  window.addEventListener('scroll', revealOnScroll);

  function revealOnScroll() {
    const elements = document.querySelectorAll('.default');

    elements.forEach(function (element) {
      const position = element.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (position < windowHeight * 0.75) {
        element.classList.add('visible');
      } else {
        element.classList.remove('visible');
      }
    });
  }

  // Initial check in case some elements are already in the viewport on page load
  revealOnScroll();
});
