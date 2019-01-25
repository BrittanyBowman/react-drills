import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super();

    this.state = {
      pets: [
        "dog",
        "cat",
        "goat",
        "fish",
        "horse",
        "hamster"
      ]
    }
  }

  render() {
    let displayPets = this.state.pets.map( (e, i) => {
      return (
        <h2 key={ i }>{ e } </h2>
      )
    })

    return (
      <div className="App">
        {displayPets}
      </div>
    );
  }
}

export default App;
