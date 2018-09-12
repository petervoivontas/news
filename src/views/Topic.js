// Dependencies
import React from 'react';

// Stylesheet
import '../styles/Topic.css'

export class Topic extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            className: 'grid isNotLast',
            loading: true
        }
    }

    componentDidMount () {
        if (this.props.isLast) {
            this.setState({
                className: 'grid isLast',
                loading: false
            })
        } else {
            this.setState({
                loading: false
            })
        }
    }

    render () {
        if (this.state.loading === false) {
            return (
                <div className={this.state.className}>
                    <div className='info'>
                        <p className='title'>{this.props.title}</p>
                        <p className='author'>By {this.props.author}</p>
                    </div>
                    <p className='text'>{this.props.children}</p>
                </div>
            )
        } else {
            return <div></div>
        }
    }
}
