import Card from './Card.js';
import React from 'react'

export default function Board(props) {
  return (
    <div className='news-board'>
        {props.drinks.drinks.map((drink, i) => <Card drink={drink} key={i}/> )}
      </div>
  )
}
