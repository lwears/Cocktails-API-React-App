import React from 'react';
import '../css/homeContainer.css';
import Ingredient from './Ingredient';
import Whiskey from './Images/Optimized-whiskey.jpg';
import Vodka from './Images/Optimized-vodka.jpg';
import Gin from './Images/Optimized-gin.jpg';
import Rum from './Images/Optimized-rum.jpg';
import Tequila from './Images/Optimized-tequila.jpg';

const categories = [
  { name: 'Whiskey', image: Whiskey, link: '/whiskey' },
  { name: 'Vodka', image: Vodka, link: '/vodka' },
  { name: 'Gin', image: Gin, link: '/gin' },
  { name: 'Rum', image: Rum, link: '/rum' },
  { name: 'Tequila', image: Tequila, link: '/tequila' },
];

export default function HomeContainer() {
  return (
    <div className="home">
      <div className="home-ingredients">
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
