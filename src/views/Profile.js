import React from 'react';

export class Profile extends React.Component {
    render () {
        return (
            <div>
                <p>{this.props.name}</p>
                <p>{this.props.email}</p>
                <p>{this.props.password}</p>
            </div>
        )
    }
}