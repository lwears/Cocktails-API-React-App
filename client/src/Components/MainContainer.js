import React, { useState } from 'react';
import axios from 'axios';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Board from './Board';
import Header from './Header';
import HomeContainer from './HomeContainer';
import DrinkContainer from './DrinkContainer';
import '../css/MainContainer.css';

export default function MainContainer() {
  const [drinks, setDrinks] = useState(null);

  const getCocktail = async (search) => {
    const data = await axios.get(`/api/cocktails/${search}`);
    setDrinks(data.data);
  };

  const display = drinks ? <Board drinks={drinks} /> : <HomeContainer />;

  return (
    <BrowserRouter>
      <div className='main-container'>
        <Header search={getCocktail} />
        <Switch>
          <Route path='/drink/:id' component={DrinkContainer} />
          <Route path='/vodka' component={Board} />
          <Route path='/whiskey' component={Board} />
          <Route path='/gin' component={Board} />
          <Route path='/rum' component={Board} />
          <Route path='/tequila' component={Board} />
          <Route exact path='/' render={() => display} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}
