import React, { Component } from 'react';
import Person from './Person/Person'
import './App.css';

class App extends Component {
 state = {
   persons: [
     {name: 'Max', age: 28},
     {name: 'Manu', age: 38},
     {name: 'Jack', age: 23},
   ],
   showPersons: false
 }

 switchNameHandler = (newName) => {
  this.setState( {
    persons: [
      {name: newName, age: 24},
      {name: 'Manu', age: 38},
      {name: 'Jack', age: 21},
    ]
  } )
 }

 togglePersonHandler= () => {
  const doesShow = this.state.showPersons;
  this.setState( {showPersons: !doesShow} )
  
 }

 nameChangedHandler = (event) => {
  this.setState( {
    persons: [
      {name: 'Max', age: 24},
      {name: event.target.value, age: 38},
      {name: 'Jack', age: 21},
    ]
  } )
 }

  render() {

    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px'
    }

    let persons = null;

    if ( this.state.showPersons ) {
      persons = (
        <div>
          {this.state.persons.map(person => {
            return <Person 
              name={person.name} 
              age={person.age}/>
          })}
        </div>
      )
    }

    return (
      <div className="App">
        <h1>HI</h1>
        <button 
          style={style}
          onClick={this.togglePersonHandler}>Switch Name
        </button>
        {persons}
      </div>
    );
  }
}

export default App;
