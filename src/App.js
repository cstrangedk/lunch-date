import React, { Component } from 'react';
import Cards from './components/Cards';
import PeopleList from './components/PeopleList';
import './App.css';

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
        'Stephen Jing'
      ]
    };
  }

  shuffle() {
    function arrayShuffle(array) {
      let retval = array.slice();
      let m = retval.length, t, i;
      while (m) {
        i = Math.floor(Math.random() * m--);
        t = retval[m];
        retval[m] = retval[i];
        retval[i] = t;
      }
      return retval;
    }

    function chunk(array, size) {
      let chunks = [];
      for (let i = 0; i < array.length; i++) {
        if (i % size === 0) {
          chunks.push([]);
        }
        chunks[chunks.length-1].push(array[i]);
      }
      return chunks;
    }

    function rebalance(groups) {
      let last = groups[groups.length-1];
      if (last.length % 4 === 1) {
        groups[0].push(last.pop());
        groups.pop();
      } else if (last.length % 4 === 2) {
        groups[0].push(last.pop());
        groups[1].push(last.pop());
        groups.pop();
      }
      return groups;
    }

    function createGroups(list) {
      if (list.length === 0) {
        return [[]];
      } else if (list.length <= 5) {
        return chunk(list, 5);
      } else if (list.length === 6) {
        return chunk(list, 3);
      } else {
        return rebalance(chunk(list, 4));
      }
    }

    let shuffledList = arrayShuffle(this.state.names);
    return createGroups(shuffledList);
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
