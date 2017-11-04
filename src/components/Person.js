import React from 'react';

class Person extends React.Component {
    render() {
        let name = this.props.name;
        return (
            <div>
                {name}
            </div>
        )
    }
}

export default Person;