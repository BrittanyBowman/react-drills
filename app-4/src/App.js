//Create a Login component that has two text inputs, one for a username and one for a password, and a button to login the user. When the login button is clicked, an alert should be showed to the user that displays what the user typed in for the username and password.

import React, { Component } from "react";
import Login from "./Login";

class App extends Component {
  render(){
    return (
      <div>
        <Login />
      </div>
    )
  }
}

export default App;