// Dependencies
import React from 'react';

// Stylesheet
import '../styles/Topic.css'

export class Topic extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            className: 'topicGrid'
        }
    }

    componentWillMount () {
        if (this.props.i === 'first') {
            this.setState({
                className: 'topicGrid first'
            })
        }
    }

    render () {
        return (
            <div className={this.state.className}>
                <div className='info'>
                    <p className='author'>By {this.props.author}</p>
                    <p className='title'>{this.props.title}</p>
                </div>
                <p className='text'>{this.props.children}</p>
            </div>
        )
    }
}
