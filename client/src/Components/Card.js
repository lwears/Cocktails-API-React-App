import React from 'react';
import '../css/Card.css';
import { Link } from 'react-router-dom';

export default function Card(props) {
  const { drink } = props;

  return (
    <Link to={`/drink/${drink.id}`} className='cocktail-card'>
      <h1 className='cocktail-title'>{drink.name}</h1>
      {drink.alcoholic ? <p className='cocktail-created'>{drink.alcoholic}</p> : <p> </p>}
      <img src={drink.img} alt={drink.name} />
    </Link>
  );
}
