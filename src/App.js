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
        'Jill Stolen',
        'John Doe',
        'Niel Stevenson',
        'Henry Gates',
        'Luke Skywalker',
        'Tina Fey',
        'Irving Chernov',
        'Vladimir Putin',
        'Wang Ho',
        'Frank Doe'
      ]
    };
  }

  shuffle() {
    let shuffledList = this.state.names.sort(function() { return 0.5 - Math.random() });
    let groups = [];
    for (let i = 0; i < shuffledList.length; i++) {
      if (i % 4 === 0) {
        groups.push([]);
      }
      groups[groups.length-1].push(shuffledList[i]);
    }
    return groups;
  }

  render() {
    let groups = this.shuffle();

    let cards = groups.map((group, i) => <div className="Card" key={'card' + i}>
        {group.map((name, i) => <span className="item" key={'item' + i}>{name}</span>)}
      </div>);

    return (
      <div className="App">
        <div className="NameList">
         {this.state.names.map((name, i) => <p key={'main' + i}>{name}</p>)}
        </div>
        {cards}
      </div>
    );
  }
}

export default App;
