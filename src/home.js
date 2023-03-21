export function makeHome() {
  const body = document.getElementById('body');
  const homeContainer = document.createElement('div');
  const homeContent = document.createElement('div');
  const imageContainer = document.createElement('div');
  const textContainer = document.createElement('div');

  textContainer.className = 'text-container';
  homeContainer.className = 'home-container';
  homeContent.className = 'home-content';
  imageContainer.className = 'image-container';

  imageContainer.style.backgroundImage = "url('../images/fox-home-page.jpg')";
  textContainer.innerHTML = `
  Welcome to Feral Fox's Food, we hope you enjoy your food in 
  the traditional fox manner. We kindly ask not to use any sort 
  of utensils brought from home or anywhere else. With regards 
  to any and all sanitary concerns, please keep in mind fox's do
  not "wash" or "cook" or perform any sort of task clean food as 
  a human would. Enjoy the fox experience as a true fox would.   
 `;

  homeContent.appendChild(imageContainer);
  homeContent.appendChild(textContainer);
  homeContainer.appendChild(homeContent);

  body.appendChild(homeContainer);
}
