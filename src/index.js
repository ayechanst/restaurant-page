const content = document.getElementById('content');
const linkArray = ['contact me', 'leave a review', 'about', 'blog'];
const fruits = ['banana', 'butt', 'hog', 'watermelon'];

function makeHead() {
  const headDiv = document.createElement('div');
  const title = document.createElement('h1');
  headDiv.className = 'banner';
  title.className = 'title';
  title.innerHTML = "The Feral Fox's Food";
  headDiv.appendChild(title);
  content.appendChild(headDiv);
}

function makeFooter(array) {
  // function takes in array and turns it into list elements
  const footer = document.createElement('div');
  const links = document.createElement('ul');
  array.forEach((item) => {
    const link = document.createElement('li');
    link.className = 'footer-link';
    link.innerHTML = `${item}`;
    links.appendChild(link);
  });
  footer.className = 'footer';
  footer.appendChild(links);
  content.appendChild(footer);
}

makeHead();
makeFooter(linkArray);
