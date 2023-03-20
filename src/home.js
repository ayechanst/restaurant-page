export function makeHome() {
  const body = document.getElementById('body');
  const home = document.createElement('div');
  home.innerHTML = 'this is the home page';
  body.appendChild(home);
}
