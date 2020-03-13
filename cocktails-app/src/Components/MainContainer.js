import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import Board from './Board';
import Header from './Header';
import HomeContainer from './HomeContainer';
import DrinkContainer from './DrinkContainer';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Ingredient from './Ingredient';


export default class MainContainer extends Component {
  constructor() {
    super();
    this.state = {
      spinner: 'Loading',
      hasSearched: false,
      drinks: null,
      result: { ...this.data },
      specificCocktail: null
    };
  }

  getCocktail = (search) => {   
    this.setState({ hasSearched: true, data: null });
    axios.get(`/api/cocktails/${search}`)
      .then((data) => this.setState({ drinks: data.data, result: data.data }));
  };

  getSpecificCocktail = (id) => {   
    this.setState({ hasSearched: true, data: null });
    axios.get(`/api/${id}`)
      .then((data) => this.setState({ specificCocktail: data.data }));
  };

  getCocktailByIngredient = (ingredient) => {
    this.setState({ hasSearched: true, data: null });
    axios.get(`/api/ingredients/${ingredient}`)
      .then((data) => this.setState({ drinks: data.data, result: data.data }));
  };

  render() {
    const display = this.state.drinks ? <Board drinks={this.state.result} /> : <HomeContainer />

    return (
      <BrowserRouter>
        <div className="main-container">
          <Header search={this.getCocktail} />
          <Switch>
            <Route path="/drink/:id" component={DrinkContainer}/> }/>
            <Route path="/vodka" component={Board} /> />
            <Route path="/whiskey" component={Board} /> />
            <Route path="/gin" component={Board} /> />
            <Route path="/rum" component={Board} /> />
            <Route path="/tequila" component={Board} /> />
            <Route exact path="/" render={ () => display }/>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

//Create component on componentmount fetch the data from API
// passing props react router