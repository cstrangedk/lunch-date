import React from 'react';
import Person from './Person';

// <div className="NameList">
// {this.state.names.map((name, i) => <p key={'main' + i}>{name}</p>)}
// </div>

class PeopleList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
    }

    render() {
        // console.log(this.props.people);
        let people = this.props.people.map((name, i) => (
            <Person
                name={name}
                key={i}
                options={true}
            />
        ))

        return(
            <div className="List">
                <div className="PersonEntry">
                    <form onSubmit={this.handleSubmit}>
                        <input type="text" value={this.state.value} onChange={this.handleChange} />
                    </form>
                </div>
                {people}
            </div>
        );
    }
}

export default PeopleList;