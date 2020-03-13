import React, { Component } from 'react';
import Card from './Card';
import axios from 'axios';
import '../css/board.css';

export default class Board extends Component {
  constructor(props) {
    super(props);
    this.state = {
      drinks: props.drinks
    };
  }

  getCocktailByIngredient = (ingredient) => {
    this.setState({ drinks: null });
    axios.get(`/api/ingredients/${ingredient}`)
      .then((data) => this.setState({ drinksByIngredient: data.drinks }));      
  };

  async componentDidMount(props) {
    if (!this.state.drinks) {
      const ingredient = this.props.match.url.split('/')
      const response = await axios.get(`/api/ingredients/${ingredient[1]}`)
      this.setState({ drinksByIngredient: response.data });      
    }
  }
  
  render() {
    const display = this.state.drinks
      ? this.state.drinks.map((drink) => <Card drink={drink} key={drink.id} />)
      : this.state.drinksByIngredient ? this.state.drinksByIngredient.map((drink) => <Card drink={drink} key={drink.id} />)
      : ''
    return (
      <div className="cocktails-board">
        {/* {JSON.stringify(this.state.drinksByIngredient)} */}
      { display }
    </div>
    );
  }
}

