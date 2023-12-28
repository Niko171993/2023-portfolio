import './hiddenAnimation.js';
import './scrollBar.js';
import './slider.js';
const navbar = document.querySelector('#nav');
const navBtn = document.querySelector('#nav-btn');
const closeBtn = document.querySelector('#close-btn');
const sidebar = document.querySelector('#sidebar');
const date = document.querySelector('#date');
// add fixed class to navbar

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
