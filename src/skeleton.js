import { makeHome } from './home';
import { makeAboutPage } from './about';
import { makeMenu } from './menu';
export const content = document.getElementById('content');
const buttonArray = ['home', 'about', 'menu'];
const linkArray = ['contact us', 'leave a review', 'about', 'blog'];

function makeTabButtons(array) {
  const tabsContainer = document.createElement('div');
  tabsContainer.className = 'button-container';
  array.forEach((item) => {
    const button = document.createElement('button');
    button.innerHTML = `${item}`;
    tabsContainer.appendChild(button);
  });
  return tabsContainer;
}

function makeHead() {
  // declaring variables
  const headDiv = document.createElement('div');
  const title = document.createElement('h1');
  const tabButtons = makeTabButtons(buttonArray);
  // modifying
  headDiv.className = 'banner';
  title.className = 'title';
  title.innerHTML = "The Feral Fox's Food";
  // appending
  headDiv.appendChild(title);
  headDiv.appendChild(tabButtons);
  content.appendChild(headDiv);
}

function makeBody() {
  const body = document.createElement('div');
  body.setAttribute('id', 'body');
  content.appendChild(body);
}

function makeFooter(array) {
  // function takes in array and turns it into list elements
  const footer = document.createElement('div');
  const links = document.createElement('div');
  array.forEach((item) => {
    const link = document.createElement('a');
    link.className = 'footer-link';
    link.innerHTML = `${item}`;
    links.appendChild(link);
  });
  footer.className = 'footer';
  links.className = 'footer-container';
  footer.appendChild(links);
  content.appendChild(footer);
}

export function makeSkeleton() {
  makeHead();
  const buttons = document.querySelectorAll('button');
  buttons.forEach((btn) => {
    btn.addEventListener('click', () => {
      if (btn.innerHTML === 'home') {
        content.innerHTML = '';
        makeSkeleton();
        makeHome();
      } else if (btn.innerHTML === 'about') {
        content.innerHTML = '';
        makeSkeleton();
        makeAboutPage();
      } else if (btn.innerHTML === 'menu') {
        content.innerHTML = '';
        makeSkeleton();
        makeMenu();
      } else {
        console.log('ERROR: page switching logic');
      }
    });
  });
  makeBody();
  makeFooter(linkArray);
}
