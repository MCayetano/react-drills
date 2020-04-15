import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


class App extends Component {
  constructor() {
    super();
      this.state = {
        username: '',
        password: ''
      }

      this.alertLogin = this.alertLogin.bind(this);
  }

  userNameHandler(name) {
    this.setState({username: name})
  }

  passwordHandler(pass) {
    this.setState({password: pass})
  }

  alertLogin() {
    alert(`Username: ${this.state.username} Password: ${this.state.password}`)
  }







  render() {
  return (
    <div className="App">
      <input onChange={e => this.userNameHandler(e.target.value)} type="text" placeholder="username"/>
      <input onChange={e => this.passwordHandler(e.target.value)} type="password" placeholder="password" />
      <button onClick={this.alertLogin}>Login</button>
    
    </div>
  );
  }
}

export default App;
