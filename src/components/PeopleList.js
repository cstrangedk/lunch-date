import React from 'react';
import Person from './Person';

// <div className="NameList">
// {this.state.names.map((name, i) => <p key={'main' + i}>{name}</p>)}
// </div>

class PeopleList extends React.Component {
    render() {
        console.log(this.props.people);
        let people = this.props.people.map((name, i) => (
            <Person
                name={name}
                key={i}
            />
        ))

        return(
            <div class="List">
                {people}
            </div>
        );
    }
}

export default PeopleList;