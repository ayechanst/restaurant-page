export const foxMenuItems = [
  [
    'Burnt Bird',
    '0.50',
    'Crow struck by lightning seasoned with dirt and gravel',
    'burnt-crow.jpg',
  ],
  [
    'Rotting Roadkill',
    '1.00',
    'Sun dried flesh with patches of fur and an antler',
    'roadkill.jpg',
  ],
  [
    'Decaying Dog',
    '4.00',
    'Cool canine with a bacterial aroma and a batch of fungi',
    'decaying-dog.jpg',
  ],
  [
    'Fat Frog',
    '2.00',
    'Rich amphibian juicy with mucus and mating pheremones',
    'frog.jpg',
  ],
  [
    'Dead Donkey',
    '10.00',
    'Large family meal with bones and marrow',
    'decaying-donkey.jpg',
  ],
  [
    'Wounded Wombat',
    '8.00',
    'Live wombat with four broken legs',
    'wounded-wombat.jpg',
  ],
  [
    'Sleeping Serpant',
    '4.00',
    'Live serpant infused with milk of the poppy',
    'sleeping-snake.jpg',
  ],
  [
    'Muddy Water',
    '0.50',
    'Brown water with hints of earth and minerals',
    'muddy-water.jpg',
  ],
  [
    'Stagnant Puddle Water',
    '1.00',
    'Clear water infused with microbes for gut health',
    'stagnant-water.jpg',
  ],
  [
    'Mountain Dew',
    '5.00',
    'Dew dropplets collected from blades of grass',
    'dew.jpg',
  ],
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
    const dish = document.createElement('h3');
    dish.className = 'dish';
    const price = document.createElement('div');
    price.className = 'price';
    const description = document.createElement('div');
    description.className = 'description';
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
  let counter = 0;
  cardArray.forEach((card) => {
    const cardContainer = document.createElement('div');
    if (counter % 2 === 0) {
      cardContainer.className = 'card-container left';
    } else {
      cardContainer.className = 'card container right';
    }
    counter += 1;
    cardContainer.appendChild(card);
    menuCardContainer.appendChild(cardContainer);
  });
  body.appendChild(menuCardContainer);
  menuCardContainer.className = 'menu-card-container';
}

// fix the cards and make them look nice
