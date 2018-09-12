// Dependencies
import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

// Icons
import homeicon from '../icons/homeicon.png';
import searchicon from '../icons/searchicon.png';

// Components
import { Home } from './Home';

// Stylesheet
import '../styles/Menu.css'

export class Menu extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            value: ''
        }
        this.handleHomeClick = this.handleHomeClick.bind(this);
    }

    handleHomeClick () {
        if (this.props.page === 'home') {
            $('.menu').toggle(500);
        } else {
            $('.menu').toggle(500);
            setTimeout(() => {
                ReactDOM.render(<Home firstRender={false} />, document.getElementById('app'));
            }, 500);
        }
    }

    render () {
        return (
            <div className='menu'>
                <div className='search'>
                    <img src={searchicon} alt='Search'/>
                    <input title='search' type='text' autoCorrect='on' placeholder='Search'></input>
                </div>
                <div className='home'>
                    <img src={homeicon} alt='Home' onClick={this.handleHomeClick}/>
                    <p onClick={this.handleHomeClick}>Home</p>
                </div>
            </div>
        )
    }
}