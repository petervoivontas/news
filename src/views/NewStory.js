// Dependencies
import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

// Stylesheet
import '../styles/NewStory.css';
import { Home } from './Home';

// Constants
const config = require('../config');

export class NewStory extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            ip: config.ip
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount () {
        $('.newStoryPage').hide();
        $('.newStoryPage').fadeIn(500);
    }

    handleExit () {
        $('.newStoryPage').fadeOut(500);
        setTimeout(() => {
            ReactDOM.render(<Home firstRender={false} />, document.getElementById('app'));
        }, 500);
    }

    handleSubmit () {
        const author = this.props.name;
        const titleInput = $('.titleInput').val().trim();
        const storyContent = $('.storyContent').val().trim();
        if (titleInput !== '' && storyContent !== '') {
            fetch(`http://${this.state.ip}:4000/uploadStory`, {
                method: 'POST',
                body: JSON.stringify({
                    author: author,
                    title: titleInput,
                    content: storyContent
                }),
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then(response => {
                if (response.ok) {
                    return response.json();
                }
                throw new Error('Request failed');
            }, networkError => console.log(networkError)
            ).then(jsonResponse => {
                console.log(jsonResponse);
                if (jsonResponse) {
                    $('.newStoryPage').fadeOut(500);
                    setTimeout(() => {
                        ReactDOM.render(<Home firstRender={false}/>, document.getElementById('app'));
                    }, 500);
                }
            });
        } else {
            console.log('Enter a title and text');
        }
    }

    render () {
        return (
            <div className='newStoryPage'>
                <div className='exitButton' onClick={this.handleExit}>
                    <p>+</p>
                </div>
                <label>Title:</label>
                <input className='titleInput'></input>
                <textarea className='storyContent' type='text' placeholder='Type here...'></textarea>
                <button className='submitButton' onClick={this.handleSubmit}>Publish</button>
            </div>
        )
    }
}