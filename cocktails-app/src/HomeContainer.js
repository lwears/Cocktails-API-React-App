import React from 'react';

const categories = [
  { name: 'Whiskey', image: Whiskey, link: '/whiskey' },
  { name: 'Vodka', image: Vodka, link: '/vodka' },
  { name: 'Gin', image: Gin, link: '/gin' },
  { name: 'Rum', image: Rum, link: '/rum' },
  { name: 'Tequila', image: Tequila, link: '/tequila' },
];

export default function HomeContainer() {
  return (
    <div className="Home">
      <div className="Home-ingredients">
        {categories && categories.map(
          (item, index) => (
            <Ingredient
              key={index}
              name={item.name}
              image={item.image}
              link={item.link}
            />
          ),
        )}
      </div>
    </div>
  );
}
