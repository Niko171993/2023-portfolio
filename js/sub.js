const navbar = document.querySelector('#nav');
const navBtn = document.querySelector('#nav-btn');
const closeBtn = document.querySelector('#close-btn');
const sidebar = document.querySelector('#sidebar');
const date = document.querySelector('#date');
// add fixed class to navbar

// show sidebar
navBtn.addEventListener('click', function () {
  sidebar.classList.add('show-sidebar');

  document.body.classList.add('overflow-hidden');
});
closeBtn.addEventListener('click', function () {
  sidebar.classList.remove('show-sidebar');

  document.body.classList.remove('overflow-hidden');
});
// set year
date.innerHTML = new Date().getFullYear();
