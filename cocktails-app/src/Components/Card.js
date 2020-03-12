import React from 'react';
import '../css/card.css';
import { Link } from 'react-router-dom';

export default function Card(props) {
  const { drink } = props;

  return (
    <Link to={`/drink/${drink.id}`} className="cocktail-card">
      <h1 className="cocktail-title">{drink.name}</h1>
      <p className="cocktail-created">{drink.alcoholic}</p>
      <img src={drink.img} alt={drink.glass} />
    </Link>
  );
}
