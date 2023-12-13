import './hiddenAnimation.js';
import './scrollBar.js';
const navbar = document.querySelector('#nav');
const navBtn = document.querySelector('#nav-btn');
const closeBtn = document.querySelector('#close-btn');
const sidebar = document.querySelector('#sidebar');
const date = document.querySelector('#date');
// add fixed class to navbar
const barContainer = document.querySelector('.bar-container');
const x = navbar.getBoundingClientRect().height;
console.log(x);

window.addEventListener('scroll', function () {
  if (window.pageYOffset > 80) {
    navbar.classList.add('navbar-fixed');
    barContainer.style.top = `${80}px`;
  } else {
    navbar.classList.remove('navbar-fixed');
    barContainer.style.top = `${0}px`;
  }
});
// show sidebar
navBtn.addEventListener('click', function () {
  sidebar.classList.add('show-sidebar');
  barContainer.style.display = 'none';
  document.body.classList.add('overflow-hidden');
});
closeBtn.addEventListener('click', function () {
  sidebar.classList.remove('show-sidebar');
  barContainer.style.display = 'block';
  document.body.classList.remove('overflow-hidden');
});
// set year
date.innerHTML = new Date().getFullYear();
