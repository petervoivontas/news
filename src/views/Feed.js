import React from 'react';
import {Topic} from './Topic';
import {topics} from '../topics';
import '../styles/Feed.css';

export class Feed extends React.Component {
    render () {
        return (
            topics.map((topic, i) => {
                console.log(`topics.js contains ${topics.length} topics`);
                console.log(`This is the topic # ${i}`);
                return <Topic title={topic.title} date={topic.date} author={topic.author} index={i} key={i}>{topic.text}</Topic>
            })
        )
    }
}