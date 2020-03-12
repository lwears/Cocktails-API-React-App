import React from 'react';
import '../css/drink.css';

export default function Drink(props) {
  const {
    id, name, alcoholic, glass, instructions, img, needs,
  } = props.cocktail;

  return (
    <div className="drink-container">
      <div className="drink-image">
        <img src={img} alt="" />
      </div>
      <div className="drink-details">
        <h1 className="drink-name">{ name }</h1>
        <h4>{ alcoholic }</h4>
        <div className="drink-needs">
          <h5>Ingredients:</h5>
          <ul>
            {needs.map(
              (need) => (
                <li key={id}>{ need }</li>
              ),
            )}
          </ul>
        </div>
        <div className="Drink-instructions">
          <h5>Instructions:</h5>
          <p>{ instructions }</p>
        </div>
        <h5>
Type Of Glass:
          {' '}
          { glass }
        </h5>
      </div>
    </div>
  );
}
