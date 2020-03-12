import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Button, Form, Nav, FormControl } from 'react-bootstrap';
import './App.css';
import Board from './Board';
import Search from './Search';
import axios from 'axios'

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      spinner: 'Loading',
      hasSearched: false,
      drinks: null,
      result: {...this.data}
    };
  }

  fetchData = (search) => {
    console.log('made fetch');
    this.setState({hasSearched: true, data: null});
    axios.get(`/api/cocktails/${search}`)
      .then(data =>this.setState({drinks: data.data, result: data.data}))
  }

  filter = (e) => {
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
  };


  render() {

    const display = this.state.drinks ?
      <Board drinks={this.state.result} /> :
      this.state.hasSearched ? 
      <div>{this.state.spinner}</div> :
      <p>Search for something cool</p>

    return (
      <div className="app">
        Search:
        <Search search={this.fetchData}/>
        <section>{display}</section>
      </div>
    );
  }
}


/*
<div className="App">
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-info">Search</Button>
        </Form>
      </div>
*/