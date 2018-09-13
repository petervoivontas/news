// Dependencies
import React from 'react';

// Components
import {Topic} from './Topic';

// Stylesheet
import '../styles/Feed.css';

// Constants
const config = require('../config');

export class Feed extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            ip: config.ip,
            loading: true
        }
    }

    componentWillMount () {
        this.setState({
            topics: this.props.topics,
            loading: false
        })
    }

    // componentWillMount () {
    //     fetch(`http://${this.state.ip}:4000/getStories`).then(response => {
    //         if (response.ok) {
    //             return response.json();
    //         }
    //         throw new Error('Request failed');
    //     }, networkError => console.log(networkError)
    //     ).then(jsonResponse => {
    //         console.log(jsonResponse);
    //         this.setState({
    //             topics: jsonResponse
    //         });
    //     });
    // }

    render () {
        if (this.state.loading === false && this.state.topics) {
            return (
                <div className='feed'>
                    <Topic key={1} title={this.state.topics[0].title} author={this.state.topics[0].author}>{this.state.topics[0].content}</Topic>
                    <Topic key={2} title={this.state.topics[1].title} author={this.state.topics[1].author}>{this.state.topics[1].content}</Topic>
                </div>
            )
        } else {
            return <div></div>
        }
    }
}