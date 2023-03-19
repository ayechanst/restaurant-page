// this is where all the functions are imported to be converted to main.js
import { makeSkeleton } from './skeleton';
import { makeMenu } from './menu';

// const content = document.getElementById(content);

if (content.innerHTML == false) {
  makeSkeleton();
}

const buttons = document.querySelectorAll('button');
buttons.forEach((btn) => {
  btn.addEventListener('click', () => {
    if (btn.innerHTML === 'home') {
      //load the home page
      content.innerHTML = '';
      makeSkeleton();
      console.log('home page');
    } else if (btn.innerHTML === 'about') {
      //load the about page
      content.innerHTML = '';
      console.log('about page');
    } else if (btn.innerHTML === 'menu') {
      // load the menu page
      content.innerHTML = '';
      makeSkeleton();
      makeMenu();
      console.log('menu page displays here');
    } else {
      console.log('ERROR: page switching logic');
    }
  });
});
