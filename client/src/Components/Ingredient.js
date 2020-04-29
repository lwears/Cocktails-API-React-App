import React from 'react';
import '../css/Ingredient.css';

export default function Ingredient(props) {
  const { link, image, name } = props;
  return (
    <a href={link}>
      <div className='ingredient' style={{ backgroundImage: `url(${image})` }}>
        <h1>{name}</h1>
        <p>view recipes</p>
      </div>
    </a>
  );
}
