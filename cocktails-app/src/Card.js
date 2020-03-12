import React from 'react';
import './card.css';
import { Link } from 'react-router-dom';

export default function Card(props) {
  const { drink } = props;

  return (
    <Link to={`/drink/${drink.idDrink}`} className="cocktail-card">
      <h1 className="cocktail-title">{drink.strDrink}</h1>
      <p className="cocktail-created">{drink.strAlcoholic}</p>
      <img src={drink.strDrinkThumb} alt={drink.strGlass} />
    </Link>
  );
}
