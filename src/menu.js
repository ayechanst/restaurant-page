export const foxMenuItems = [
  [
    'Burnt Bird',
    0.5,
    'Crow struck by lightning seasoned with dirt and gravel',
    'burnt-crow.jpg',
  ],
  [
    'Rotting Roadkill',
    1,
    'Sun dried flesh with patches of fur and an antler',
    'decaying-dog.jpg',
  ],
  [
    'Decaying Dog',
    4,
    'Cool canine with a bacterial aroma and a batch of fungi',
  ],
  ['Fat Frog', 2, 'Rich amphibian juicy with mucus and mating pheremones'],
  ['Dead Donkey', 10, 'Large family meal with bones and marrow'],
  ['Wounded Wombat', 8, 'Live wombat with four broken legs'],
  ['Sleeping Serpant', 4, 'Live serpant infused with milk of the poppy'],
  ['Muddy Water', 0.5, 'Brown water with hints of earth and minerals'],
  [
    'Stagnant Puddle Water',
    1,
    'Clear water infused with microbes for gut health',
  ],
  ['Mountain Dew', 5, 'Dew dropplets collected from blades of grass'],
];

const humanMenuItems = ['rice', 'steak', 'sparkling water'];

function makeCard() {
  const card = document.createElement('div');
  card.className = 'card';
  return card;
}

function fillCards(menuItems) {
  const cardArray = [];

  menuItems.forEach((item) => {
    let card = makeCard();
    const dish = document.createElement('div');
    const price = document.createElement('div');
    const description = document.createElement('div');
    const imgContainer = document.createElement('div');
    const imgWrapper = document.createElement('div');

    dish.innerHTML = `${item[0]}`;
    price.innerHTML = `$${item[1]}`;
    description.innerHTML = item[2];
    imgContainer.style.backgroundImage = `url('../images/${item[3]}')`;
    imgContainer.className = 'card-image-container';
    imgWrapper.className = 'image-wrapper';

    imgWrapper.appendChild(imgContainer);
    card.appendChild(imgWrapper);
    card.appendChild(dish);
    card.appendChild(price);
    card.appendChild(description);
    cardArray.push(card);
  });
  return cardArray;
}

export function makeMenu() {
  const body = document.getElementById('body');
  const cardArray = fillCards(foxMenuItems);
  const menuCardContainer = document.createElement('div');
  cardArray.forEach((card) => menuCardContainer.appendChild(card));
  body.appendChild(menuCardContainer);
  menuCardContainer.className = 'menu-card-container';
}

// fix the cards and make them look nice
