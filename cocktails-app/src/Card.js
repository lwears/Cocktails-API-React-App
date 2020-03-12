import React from 'react';
import './card.css';

export default function Card(props) {
  const isAlcoholic = props.drink.strAlcoholic;

  return (
    <div className="cocktail-card">
      <h1 className="cocktail-title">{props.drink.strDrink}</h1>
      <p className="cocktail-created">{isAlcoholic}</p>
      <img src={props.drink.strDrinkThumb} alt={props.drink.strGlass} />
    </div>
  );
}
