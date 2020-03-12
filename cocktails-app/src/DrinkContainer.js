import React, { Component } from 'react';
import axios from 'axios';

export default class DrinkContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  getSpecificCocktail = (id) => {   
    this.setState({ hasSearched: true, data: null });
    axios.get(`/api/${id}`)
      .then((data) => this.setState({ specificCocktail: data.data }));
  };

  componentDidMount(props) {
    const id = this.props.match.url.replace('/drink/', '');
    this.getSpecificCocktail(id)
  }

  render() {
   const display = this.state.specificCocktail
      ? <p>{JSON.stringify(this.state.specificCocktail.drinks)}</p>
      : ''
    return (
      display
    );
  }
}
