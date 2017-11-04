import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      names: [
        'John Tuthill',
        'Kathy Belrose',
        'Jack Sanberg',
        'Jill Stolen'
      ]
    };
  }

  render() {
    return (
      <div className="App">
        {this.state.names.map((name) => <p>{name}</p>)}
      </div>
    );
  }
}

export default App;
