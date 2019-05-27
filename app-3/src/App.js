//Create an app where there is an array of data on state that is then shown on the DOM as a list. There should also be a way for the user to filter what's shown in the list.
import React, { Component } from "react";

class App extends Component {
  constructor() {
    super();
    this.state = {
      filteredData: "",
      data: ["thingOne", "thingtwo", "thingthree", "thingfour"]
    };
  }

  handleChange(value) {
    this.setState({ filteredData: value });
  }
//filter through the array and show only what is filtered based upon the value in the input box. Convert to lowercase after element AND inside this.state.filteredData.
  render() {
    const lowerCaseThing = this.state.filteredData.toLowerCase();
    let list = this.state.data
      .filter((element) => {
        return element.toLowerCase().includes(lowerCaseThing);
      })
      .map((element, index) => {
        return <h2 key={index}>{element}</h2>
      });
    return (
      <div>
        <input type="text" value={this.state.filteredData} onChange={event => this.handleChange(event.target.value)} />
        {list}
      </div>
    )
  }
}

export default App;
