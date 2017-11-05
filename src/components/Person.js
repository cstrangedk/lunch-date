import React from 'react';

class Person extends React.Component {
    render() {
        let name = this.props.name;
        let options = this.props.options;

        return (
            <div className="Person">
                <p>
                    {name}
                    {options ?
                        <span style={{float: "right"}}>
                            <i class="fa fa-pencil-square-o" aria-hidden="true"></i><i class="fa fa-trash-o" aria-hidden="true"></i>
                        </span>
                        : null
                    }
                </p>
            </div>
        )
    }
}

export default Person;