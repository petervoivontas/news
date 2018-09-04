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
        this.handleChange = this.handleChange.bind(this);
        this.handleHomeClick = this.handleHomeClick.bind(this);
    }

    handleChange (event) {
        this.setState({
            value: event.target.value
        })
    }

    handleHomeClick () {
        if (this.props.page === 'home') {
            $('.menu').toggle(500);
        } else {
            $('.menu').toggle(500);
            setTimeout(() => {
                ReactDOM.render(<Home />, document.getElementById('app'));
            }, 500);
        }
    }

    render () {
        return (
            <div className='menu'>
                <div className='search'>
                    <img src={searchicon} alt='Search'/>
                    <input id='searchfield' title='search' type='text' value={this.state.value} onChange={this.handleChange}></input>
                </div>
                <div className='home'>
                    <img src={homeicon} alt='Home' onClick={this.handleHomeClick}/>
                    <p onClick={this.handleHomeClick}>Home</p>
                </div>
            </div>
        )
    }
}