//Create a basic react app where you type in a text box and it shows up as text on the DOM.

import React, { Component } from 'react'

class App extends Component {
  constructor(){
    super()
    this.state = {
      text: ""
    }
  }
  handleChange = (value) => {
    this.setState({text: value})
  }
  render(){
    return(
      <div>
        <input type="text" onChange={(event)=> this.handleChange(event.target.value)} />
        <p>{this.state.text}</p>
      </div>
    )
  }
}

export default App;