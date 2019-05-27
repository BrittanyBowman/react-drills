//Create an app where there is an array of data on state that is then shown on the DOM as a list.

import React, { Component } from 'react'

class App extends Component {
  constructor(){
    super()
    this.state = {
      list: ["s1", "s2", "s3", "s4"]
    }
  }
  //map over the array
  render(){
    let displayList = this.state.list.map((element, index) => {
      return (
      <h2 key={index}>{element}</h2>
      )
    })

    return (
      <div>
        {displayList}
      </div>
    );
  }
}

export default App;
