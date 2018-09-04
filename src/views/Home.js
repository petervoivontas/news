// Dependencies
import React from 'react';

// Components
import { Header } from './Header';
import { Feed } from './Feed';

// Stylesheet
import '../styles/Home.css';

export class Home extends React.Component {
    render () {
        return (
            <div className='homePage'>
                <Header page='home'/>
                <Feed/>
            </div>
        )
    }
}