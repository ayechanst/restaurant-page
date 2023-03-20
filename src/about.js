export function test() {
  const body = document.getElementById('body');
  const test = document.createElement('div');
  test.innerHTML = 'about page works';
  body.appendChild(test);
}
