export const foxMenuItems = [
  ['Burnt Bird', 0.5, 'Crow struck by lightning seasoned with dirt and gravel'],
  ['Rotting Roadkill', 1, 'Sun dried flesh with patches of fur and an antler'],
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
];

const humanMenuItems = ['rice', 'steak', 'sparkling water'];

function makeCard() {
  // declare variables, and this function should make card objects with its called
  const card = document.createElement('div');
  const cardContent = document.createElement('div');
  card.className = 'card';
  cardContent.className = 'card-content';
  card.appendChild(cardContent);
  return card;
}

function fillCards(menuItems) {
  const cardArray = [];
  menuItems.forEach((item) => {
    let card = makeCard();
    const dish = document.createElement('div');
    const price = document.createElement('div');
    const description = document.createElement('div');
    dish.innerHTML = `${item[0]}`;
    price.innerHTML = `$${item[1]}`;
    description.innerHTML = item[2];
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
  cardArray.forEach((card) => body.appendChild(card));
}
