import React from 'react';
import Card from './Card';
import './board.css';

export default function Board(props) {
  const { drinks } = props;
  return (
    <div className="cocktails-board">
      {drinks.map((drink, i) => <Card drink={drink} key={drink.idDrink} />)}
    </div>
  );
}
