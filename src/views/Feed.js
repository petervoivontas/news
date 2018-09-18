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
        // this.handleSwipe = this.handleSwipe.bind(this);
        // this.handleTouchStart = this.handleTouchStart.bind(this);
        // this.handleTouchEnd = this.handleTouchEnd.bind(this);
    }

    componentWillMount () {
        this.setState({
            topics: this.props.topics,
            loading: false
        })
    }

    startX;
    startY;
    dist;
    threshold = 150;
    allowedTime = 200;
    elapsedTime;
    startTime;

    // handleSwipe (isSwipeUp) {
    //     if (isSwipeUp) {
    //         const div = document.getElementsByClassName('first');
    //         console.log('You have made a swipe up');
    //         $('.first').css({
    //             'animation-name': 'swipeUp',
    //             'animation-duration': '2s',
    //             'animation-fill-mode': 'forwards'
    //         });
    //     } else {
    //         console.log('Conditions not met for swipe up');
    //     }
    // }

    // handleTouchStart (e) {
    //     const touchobj = e.changedTouches[0];
    //     this.dist = 0;
    //     this.startX = touchobj.pageX;
    //     this.startY = touchobj.pageY;
    //     this.startTime = new Date().getTime();
    //     e.preventDefault();
    // }

    // handleTouchMove (e) {
    //     e.preventDefault();
    // }

    // handleTouchEnd (e) {
    //     const touchobj = e.changedTouches[0];
    //     this.dist = this.startY - touchobj.pageY;
    //     this.elapsedTime = new Date().getTime() - this.startTime;
    //     const swipeUpBoolean = (this.elapsedTime <= this.allowedTime && this.dist >= this.threshold /**&& Math.abs(touchobj.pageX - this.startX) <= 100*/);
    //     this.handleSwipe(swipeUpBoolean);
    //     e.preventDefault();
    // }

    render () {
        if (this.state.loading === false && this.state.topics) {
            return (
                <div className='feed' onTouchStart={this.handleTouchStart} onTouchMove={this.handleTouchMove} onTouchEnd={this.handleTouchEnd}>
                    <Topic key={1} i='first' title={this.state.topics[0].title} author={this.state.topics[0].author}>{this.state.topics[0].content}</Topic>
                    <Topic key={2} title={this.state.topics[1].title} author={this.state.topics[1].author}>{this.state.topics[1].content}</Topic>
                </div>
            )
        } else {
            return <div></div>
        }
    }
}