import React, { Component } from 'react';

import Persons from '../../components/Persons/Persons';

import styles from './App.module.css';

const INITIAL_STATE = {
  persons: [
    { id: 'p1', name: 'Max', age: 28 },
    { id: 'p2', name: 'Manu', age: 29 },
    { id: 'p3', name: 'Stephanie', age: 26 }
  ],
  showPersons: false
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = INITIAL_STATE;
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => p.id === id);

    const person = { ...this.state.persons[personIndex] };
    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons: persons });
  };

  deletePersonHandler = personIndex => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);

    this.setState({ persons: persons });
  };

  render() {
    return (
      <div className={styles.App}>
        <h1>{this.props.title}</h1>
        <Persons
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangedHandler}
        />
      </div>
    );
  }
}

export default App;