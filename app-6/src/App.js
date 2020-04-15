import React, { Component } from 'react';
import logo from './logo.svg';
import Todo from './Todo';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state={
      list: [],
      input: ""

    }

    this.addTodo = this.addTodo.bind(this);


  }

  inputHandler(val){
    this.setState({input: val})
  }

  addTodo() {
    this.setState({
      list: [...this.state.list, this.state.input],
      input: ""
    });
  }

  render(){
  let list = this.state.list.map((elem, index) => {
    return <Todo key={index} task={elem} />;
  });
  return (
    <div className="App">
      <h1>My to-do list:</h1>
      <div>
      <input 
      value={this.state.input} 
      type="text" 
      placeholder="Todo" 
      onChange={e => this.inputHandler(e.target.value)} />
      <button onClick={this.addTodo}>Add</button>
    </div>
    
    <br />
      {list}
    </div>
   );
  }
}

export default App;
