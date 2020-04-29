import React from 'react';
import '../css/Drink.css';

export default function Drink(props) {
  const { id, name, alcoholic, glass, instructions, img, needs } = props.cocktail;

  return (
    <div className='drink-container'>
      <div className='drink-image'>
        <img src={img} alt='' />
      </div>
      <div className='drink-details'>
        <h1 className='drink-name'>{name}</h1>
        <h4>{alcoholic}</h4>
        <div className='drink-needs'>
          <h3>Ingredients:</h3>
          <ul>
            {needs.map((need) => (
              <li key={id}>{need}</li>
            ))}
          </ul>
        </div>
        <div className='Drink-instructions'>
          <h3>Instructions:</h3>
          <p>{instructions}</p>
        </div>
        <h4>Type Of Glass: {glass}</h4>
      </div>
    </div>
  );
}
