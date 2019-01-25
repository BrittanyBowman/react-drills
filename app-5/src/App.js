import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Image from './Image'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Image myImage={ "https://media.mnn.com/assets/images/2013/02/grumpycat.jpg.696x0_q80_crop-smart.jpg" } />
      </div>
    );
  }
}

export default App;
