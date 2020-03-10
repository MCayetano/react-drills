import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      string: "",
      cars: ["Bentley", "Rolls Royce", "Porsche", "Bugatti"]
    };
  }

  handleChange(val) {
    this.setState({ string: val });
  }

  render() {
    let carList = this.state.cars
    .filter((element, index) => {
        return element.includes(this.state.string);
      })
      .map((element) => {
        return <h2>{element}</h2>;
      });

    return (
      <div className="App">
        <input onChange={e => this.handleChange(e.target.value)} type="text" />
        {carList}
      </div>
    );
  }
}

export default App;

