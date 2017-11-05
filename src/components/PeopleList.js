import React from 'react';
import Person from './Person';

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
        let people = this.props.people.map((name, i) => (
            <Person
                name={name}
                key={i}
                options={true}
            />
        ))

        return(
            <div className="List">
                <header>
                    <h1 className="ListHeader">
                        Lunch Groups
                    </h1>
                    <button>
                        Edit
                    </button>
                </header>

                {people}
            </div>
        );
    }
}

export default PeopleList;