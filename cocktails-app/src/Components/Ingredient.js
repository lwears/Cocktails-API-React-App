import React from 'react';
import '../css/ingredient.css';

export default function Ingredient(props) {
  return (
    <a to={props.link}>
      <div className="ingredient" style={{ backgroundImage: `url(${props.image})` }}>
        <h1>{ props.name }</h1>
        <p>view recipes</p>
      </div>
    </a>
  );
}
