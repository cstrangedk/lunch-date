import React from 'react';

class Person extends React.Component {
    render() {
        let name = this.props.name;
        let options = this.props.options;

        return (
            <div className="Person">
                <span className="name">
                    {name}
                </span>
                {options ?
                    <span className="icons">
                        <i className="fa fa-pencil-square-o" aria-hidden="true"></i>
                        <i className="fa fa-trash-o" aria-hidden="true"></i>
                    </span>
                    : null
                }
            </div>
        )
    }
}

export default Person;