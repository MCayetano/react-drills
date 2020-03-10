import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(){
    super();

    this.state = {
      cars: ['Beamer', 'Benz', 'Rolls Royce', 'Bentley']
    }
  }


  render(){
      let carList = this.state.cars.map((elem, index) => {
        return <h2 key={index}>{elem}</h2>;
      });

      return <div className="App">{carList}</div>;

    
  }
}


export default App;
