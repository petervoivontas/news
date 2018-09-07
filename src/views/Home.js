// Dependencies
import React from 'react';
import $ from 'jquery';

// Components
import { Header } from './Header';
import { Feed } from './Feed';

// Stylesheet
import '../styles/Home.css';

export class Home extends React.Component {
    componentDidMount () {
        /**
        * !this.props.firstRender should not be used
        * because the app checks if this.props.firstRender
        * is defined, which always evaluates to false
        * when the app first starts
        */

        if (this.props.firstRender === false) {
            const homePage = $('.homePage');
            homePage.hide();
            homePage.fadeIn(500);
        }
    }

    render () {
        return (
            <div className='homePage'>
                <Header page='home'/>
                <Feed/>
                <div className='newTopic'>
                    <p>+</p>
                </div>
            </div>
        )
    }
}