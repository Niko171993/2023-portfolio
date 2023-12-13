//get the height of full website, and height of the screen(1 element)

//to get height of full website
//gives height of our whole website
// console.log(document.body.scrollHeight);

//height of screen - what is visible
// console.log(window.innerHeight);
/*
get the max value of full height
*/
let fullHeight = document.body.scrollHeight - window.innerHeight;
console.log(fullHeight);
const navbarH = document.querySelector('#nav');

//now makea function
window.addEventListener('scroll', () => {
  // real time value of height - scrolledHeight
  const scroll = pageYOffset;
  const navBarHeight = navbarH.getBoundingClientRect().height;

  //make another variable
  //calculates the percentage of how far down a user has scrolled
  let progress = Math.min((scroll / (fullHeight - navBarHeight)) * 100, 100);

  document.getElementById('bar').style.width = `${progress}%`;
  console.log('Scroll:', scroll);
  console.log('Full Height:', fullHeight);
  console.log('Progress:', progress);
});
// navbar increases height, we need to minus it.
//Math.min(,100) just makes sure we get out at 100
