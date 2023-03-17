import _ from 'lodash';
function component() {
  const element = document.createElement('div');

  // Lodash, now imported by this script
  element.innerHTML = _.join(['Hello', 'fartmaster'], ' ');

  return element;
}

document.body.appendChild(component());

console.log('everything is working correctly');
