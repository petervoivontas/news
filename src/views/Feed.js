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
                this.state.topics.map((topic, i) => {
                    if (i + 1 === this.state.topics.length) {
                        return <Topic isLast={true} key={i} title={topic.title} author={topic.author}>{topic.content}</Topic>
                    } else {
                        return <Topic key={i} title={topic.title} author={topic.author}>{topic.content}</Topic>
                    }
                    
                })
            )
        } else {
            return <div></div>
        }
    }
}