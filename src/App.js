import React, { Component } from 'react';
import './App.css';

function arrayShuffle(arr) {
  let retval = arr.slice();
  let m = retval.length, t, i;
  while (m) {
    i = Math.floor(Math.random() * m--);
    t = retval[m];
    retval[m] = retval[i];
    retval[i] = t;
  }
  return retval;
}

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
    let shuffledList = arrayShuffle(this.state.names);
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
