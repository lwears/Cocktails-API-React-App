import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Drink from './Drink';


export default function DrinkContainer(props) {
  const [specificCocktail, setSpecificCocktail] = useState(null);

  const getSpecificCocktail = (id) => {
    axios.get(`/api/${id}`)
      .then((data) => setSpecificCocktail(data.data));
  };

  useEffect(() => {
    const id = props.match.url.replace('/drink/', '');
    getSpecificCocktail(id);
  }, [props.match.url]);

  return (
    specificCocktail ? <Drink cocktail={specificCocktail} /> : ''
  );
}
