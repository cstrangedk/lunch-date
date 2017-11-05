import React, { Component } from 'react';
import Cards from './components/Cards';
import PeopleList from './components/PeopleList';
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
        'John Muthill',
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
        'Frank Doe',
        'Doopak Landamasky',
        'Robert Miles',
        'Hector Morales',
        'Gerard Nizarros',
        'Pancho Via',
        'Guy Fawkes',
        'Elmer Maricio Cruz Garcia',
        'Antonio Maria Rossini',
        'Derek Jennen',
        'Stephen Jing',
        'Hooko Wilcox'
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

    return (
      <div className="App">
        <PeopleList people={this.state.names} />
        <Cards groups={groups}/>
      </div>
    );
  }
}

export default App;
