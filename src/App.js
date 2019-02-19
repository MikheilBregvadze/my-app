import React, { Component } from 'react';
import Person from './Person/Person'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>HI</h1>
        <Person name="max" age="21"/>
        <Person name="tom" age="16">Some texte here</Person>
        <Person name="kate" age="33"/>
      </div>
    );
  }
}

export default App;
