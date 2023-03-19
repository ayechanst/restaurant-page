import { makeSkeleton } from './skeleton';

function makeCard() {
  // declare variables
  const body = document.getElementById('body');
  const card = document.createElement('div');
  const cardContent = document.createElement('div');
  // modifications
  card.className = 'card';
  cardContent.className = 'cardContent';
  cardContent.innerHTML = 'card content is being displayed';
  // appending
  card.appendChild(cardContent);
  body.appendChild(card);
}

function fillCard() {
  console.log('the card has been filled');
}

export function makeMenu() {
  makeSkeleton();
  makeCard();
}
