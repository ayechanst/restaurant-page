export function makeAboutPage() {
  const body = document.getElementById('body');
  const aboutCard = document.createElement('div');
  const aboutCardContent = document.createElement('div');
  aboutCard.className = 'about-card';
  aboutCardContent.innerHTML =
    'The Feral Fox is a restaurant for humans commited to staying true to the fox way of life.\
     Everything served here is authentic fox food that foxes would eat. The food is taken from \
     the wild and modified by our fox chefs to perfection. The restaurant serves special food \
     out of most humans comfort zones! Please be open minded and appreciate the unique flavors \
     found in no other cuisine in the world. Fox approved, certified, and ran. ';
  aboutCard.appendChild(aboutCardContent);
  body.appendChild(aboutCard);
}
