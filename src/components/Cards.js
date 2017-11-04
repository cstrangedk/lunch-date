import React from 'react';
import Person from './Person';

class Cards extends React.Component {
    render() {
        let groups = this.props.groups;
        let cards = groups.map((group, i) => (
            <div className="Card" key={'card' + i}>
                {group.map((name, i) => (
                    <Person
                        name={name}
                        key={i}
                    />
                ))}
            </div>)
        );

        return(
            <div>
                {cards}
            </div>
        )
    }
}

export default Cards;