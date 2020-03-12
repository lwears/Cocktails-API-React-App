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

  filter(e) {
    const { value } = e.target;
    const { data } = this.state;
    if (value !== '') {
      this.setState({
        result: {
          hits: data.hits.filter((hit) => hit.title.toLowerCase().includes(value.toLowerCase())),
        },
      });
    } else {
      this.setState({ result: data });
    }
  }


  render() {
    const display = this.state.drinks ? <Board drinks={this.state.result} /> : <HomeContainer />

    return (
      <BrowserRouter>
        <div className="main-container">
          <Header search={this.getCocktail} />
          <Switch>
            <Route exact path="/" render={ () => display }/>
            {/* <Route path="/ingredient" component={HomeContainer}/> */}
            {/* <Route path="/drink" /> */}
            <Route path="/drink/:id" component={DrinkContainer}/> }/>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}