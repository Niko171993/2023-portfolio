const hiddenElements = document.querySelectorAll('.hA-hidden');
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('hA-show');
    } else {
      entry.target.classList.remove('hA-show');
    }
  });
});
hiddenElements.forEach((element) => observer.observe(element));
