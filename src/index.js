// this is where all the functions are imported to be converted to main.js
import { makeSkeleton } from './skeleton';

if (content.innerHTML == false) {
  makeSkeleton();
}

const buttons = document.querySelectorAll('button');
buttons.forEach((btn) => {
  btn.addEventListener('click', () => {
    if (btn.innerHTML === 'home') {
      //load the home page
      makeHead();
      makeFooter(linkArray);
      console.log('home page');
    } else if (btn.innerHTML === 'about') {
      //load the about page
      console.log('about page');
    } else if (btn.innerHTML === 'menu') {
      // load the menu page
      console.log('menu page displays here');
    } else {
      console.log('ERROR: page switching logic');
    }
  });
});
