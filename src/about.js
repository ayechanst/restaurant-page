import { makeHome } from './home';

export function makeAboutPage() {
  makeHome();
  const textContainer = document.querySelector('.text-container');
  textContainer.innerHTML = '';
  // append things to the text container
  const heading = document.createElement('h2');
  const aboutText = document.createElement('div');

  heading.innerHTML = 'About Us';
  aboutText.innerHTML = `
  This is a fox family owned restuarant owened and operated by
  foxes. This amazing restaurant would not be possible without
  the help of one human however. Due to lack of opposable thumbs,
  a web designer has been employed by the owner. The web designer
  is paid in free rotten flesh. 
  
  The restuarnt was founded in 2012 in Silicon Valley as a trendy
  "out there" sort of dining experience. The cheap food also made
  it accessible to all sorts of people, and in 2018 the restaurant
  branched into its large chain serving millions worldwide. Our 
  pledge is to serve as authentic as possible fox food without 
  any compromises on quality.
  `;

  textContainer.appendChild(heading);
  textContainer.appendChild(aboutText);
}
