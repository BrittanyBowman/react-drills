import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super();

    this.state = {
      filterString: "",
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
  handleChange( filter ) {
    this.setState({filterString: filter});
  }

  render() {
    return (
      <div className="App">
        <input onChange={(e)=>this.handleChange(e.target.value)} type="text" />
        {displayPets}
      </div>
    );
  }
}

export default App;
