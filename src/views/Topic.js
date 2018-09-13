// Dependencies
import React from 'react';

// Stylesheet
import '../styles/Topic.css'

export class Topic extends React.Component {
    render () {
        return (
            <div className='grid'>
                <div className='info'>
                    <p className='author'>By {this.props.author}</p>
                    <p className='title'>{this.props.title}</p>
                </div>
                <p className='text'>{this.props.children}</p>
            </div>
        )
    }
}
