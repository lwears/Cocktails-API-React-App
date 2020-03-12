import React from 'react';
import Card from './Card';
import '../css/board.css';

export default function Board(props) {
  const { drinks } = props;
  return (
    <div className="cocktails-board">
      {drinks.map((drink) => <Card drink={drink} key={drink.idDrink} />)}
    </div>
  );
}
