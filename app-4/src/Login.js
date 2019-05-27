//Create a Login component that has two text inputs, one for a username and one for a password, and a button to login the user. When the login button is clicked, an alert should be showed to the user that displays what the user typed in for the username and password.

import React, {Component} from 'react';

class Login extends Component {
    constructor(){
        super();
        this.state = {
            username: '',
            password: ''
        }
    }

    nameChange(value){
        this.setState({username: value})
    }

    passChange(value){
        this.setState({password: value})
    }

    login = () => {
        alert(`Username: ${this.state.username} Password: ${this.state.password}`)
    }

    render(){
        return(
            <div>
                <input type="text" onChange={event => this.nameChange(event.target.value)} placeholder="username..." />
                <input type="text" onChange={event => this.passChange(event.target.value)} placeholder="password..." />
                <button onClick={this.login}>Login</button>
            </div>
        )
    }
}

export default Login;