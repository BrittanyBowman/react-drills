//Create an app hitting an API of your choice (swapi.co, birdapi.com, pokeapi, smurfs, marvel api, etc). The API should be hit as soon as the component is finished rendering. The app should set value(s) on state based on results from the API and then show the propertie(s) on state in the DOM.

//The `axios` package should be used to hit an API.

import React, { Component } from 'react';
import axios from 'axios';

class App extends Component {
  constructor(){
    super();
    this.state = {
      lukeSkywalker: ""
    }
  }
componentDidMount() {
  axios.get("https://swapi.co/api/people/1").then( res => {
    this.setState({lukeSkywalker: res.data})
  });
}

  render() {
    return (
      <div><center>
        <h1>Name: {this.state.lukeSkywalker.name} </h1>
        <h1>Birth Year: {this.state.lukeSkywalker.birth_year}</h1>
        <h1>Height: {this.state.lukeSkywalker.height}</h1>
        <h1>Eye Color: {this.state.lukeSkywalker.eye_color}</h1>
        </center>
      </div>
    )
  }
}

export default App
