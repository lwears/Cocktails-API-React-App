import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from './Card';
import '../css/board.css';

export default function Board(props) {
  const [drinks, setDrinks] = useState(props.drinks);

  const getCocktailByIngredient = async (ingredient) => {
    const { data } = await axios.get(`/api/ingredients/${ingredient}`);
    setDrinks(data);
  };

  useEffect(() => {
    if (!drinks) {
      const ingredient = props.match.url.split('/');
      getCocktailByIngredient(ingredient[1]);
    }
  }, [drinks, props.match]);

  return (
    <div className="cocktails-board">
      { drinks ? drinks.map((drink) => <Card drink={drink} key={drink.id} />) : '' }
    </div>
  );
}
