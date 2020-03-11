import React from 'react'
import './card.css'

export default function Card(props) {

  const isAlcoholic = props.drink.strAlcoholic;

  return (
    <div className="news-card">
      <h1 className="news-card-title">{props.drink.strDrink}</h1>
      <img src={props.drink.strDrinkThumb} alt={props.drink.strGlass}/>
      <p href={props.drink.strDrinkThumb} className="news-card-link" alt={props.drink.strGlass}>{props.drink.strDrinkThumb}</p>
      <p className="news-card-created">{isAlcoholic}</p>
    </div>
  )
}
