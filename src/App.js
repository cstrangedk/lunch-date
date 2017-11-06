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
    this.state = { names: [] };
  }

  componentWillMount() {
    const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
    const targetUrl = 'http://52.33.141.229:3038/people';
    fetch(proxyUrl + targetUrl)
    .then(response => response.json())
    .then(data => {
      const names = [];
      data.forEach(row => names.push([row.id, row.name]));
      this.setState({ names });
    })
    .catch( ex => {
      console.log('exception loading people', ex);
      return ex;
    });
  }

  shuffle() {
    let shuffledList = arrayShuffle(this.state.names.map(row => row[1]));
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
        <PeopleList people={this.state.names.map(row => row[1])} />
        <Cards groups={groups}/>
      </div>
    );
  }
}

export default App;
