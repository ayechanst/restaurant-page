import _ from 'lodash';
// how do you import files correctly?
function component() {
  const element = document.createElement('div');

  // Lodash, now imported by this script
  element.innerHTML = _.join(['Hello', 'test'], '');
  // why lodash why the fuck do we need this? Find out
  return element;
}

function test() {
  const content = document.getElementById(content);
  const poopyFart = document.createElement(div);
  poopyFart.innerHTML = 'poopy fart';
  content.appendChild(poopyFart);
}

document.body.appendChild(component());
document.body.appendChild(test());
