// Dependencies
import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

// Components
import { Header } from './Header';
import { Feed } from './Feed';
import { NewStory } from './NewStory';

// Stylesheet
import '../styles/Home.css';

// Constants
const config = require('../config');

export class Home extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            animation: '',
            ip: config.ip,
            topics: [],
            loading: true
        }
        this.handleClick = this.handleClick.bind(this);
    }

    componentWillUnmount () {
        this.setState({
            topics: []
        })
    }

    componentWillMount () {
        fetch(`http://${this.state.ip}:4000/getStories`).then(response => {
            if (response.ok) {
                return response.json();
            }
            throw new Error('Request failed');
        }, networkError => console.log(networkError)
        ).then(jsonResponse => {
            console.log(jsonResponse);
            this.setState({
                topics: jsonResponse,
                loading: false
            });
        });
    }

    componentDidUpdate () {
        /**
        * !this.props.firstRender should not be used
        * because the app checks if this.props.firstRender
        * is defined, which always evaluates to false
        * when the app first starts
        */
        if  (this.props.firstRender === false && this.state.loading === false) {
            const homePage = $('.homePage');
            homePage.hide();
            homePage.fadeIn(500);
        }
    }

    handleClick () {
        // const button = $('.newStory');
        // if (this.state.animation === '' || this.state.animation === 'moveDown') {
        //     button.css({
        //         'animation': 'moveUp',
        //         'animation-duration': '1s',
        //         'animation-fill-mode': 'forwards'
        //     });
        //     this.setState({
        //         animation: 'moveUp'
        //     })
        // } else {
        //     button.css({
        //         'animation': 'moveDown',
        //         'animation-duration': '1s',
        //         'animation-fill-mode': 'forwards'
        //     });
        //     this.setState({
        //         animation: 'moveDown'
        //     });
        // }
        $('.homePage').fadeOut(500);
        setTimeout(() => {
            ReactDOM.render(<NewStory name={this.props.name}/>, document.getElementById('app'));
        }, 500);
    }

    render () {
        if (this.state.loading === false) {
            return (
                <div className='homePage'>
                    <Header page='home'/>
                    <Feed topics={this.state.topics}/>
                    <div className='newStory' onClick={this.handleClick}>
                        <p>+</p>
                    </div>
                </div>
            )
        } else {
            return <div></div>
        }
    }
}