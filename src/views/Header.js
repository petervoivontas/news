// Dependencies
import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

//Icons
import logo from '../icons/logo.png';
import menuicon from '../icons/menuicon.png';

// Components
import { Home } from './Home';
import { Signup } from './Signup';
import { Login } from './Login';
import { Menu } from './Menu';

// Stylesheet
import '../styles/Header.css';

export class Header extends React.Component {
    constructor (props) {
        super(props);
        this.handleImageClick = this.handleImageClick.bind(this);
        this.handleButtonClick = this.handleButtonClick.bind(this);
        this.handleMenuClick = this.handleMenuClick.bind(this);
    }

    componentWillMount () {
        if (this.props.page === 'signup') {
            this.setState({
                buttonText: 'Log In',
                className: 'loginButton'
            });
        } else {
            this.setState({
                buttonText: 'Sign Up',
                className: 'signupButton'
            });
        }
    }

    componentDidMount () {
        $('.menu').hide();
    }

    handleMenuClick () {
        $('.menu').toggle(500);
    }

    handleImageClick () {
        if (this.props.page === 'signup') {
            const signupPage = $('.signupPage');
            signupPage.fadeOut(500);
            setTimeout(() => {
                ReactDOM.render(<Home firstRender={false}/>, document.getElementById('app'));
            }, 500);
        } else if (this.props.page === 'login') {
            const loginPage = $('.loginPage');
            loginPage.fadeOut(500);
            setTimeout(() => {
                ReactDOM.render(<Home firstRender={false}/>, document.getElementById('app'));
            }, 500);
        }
    }

    handleButtonClick () {
        const homePage = $('.homePage');
        const signupPage = $('.signupPage');
        const loginPage = $('.loginPage');
        if (this.props.page === 'home') {
            homePage.fadeOut(500);
            setTimeout(() => {
                ReactDOM.render(<Signup />, document.getElementById('app'));
            }, 500);
        } else if (this.props.page === 'signup') {
            signupPage.fadeOut(500);
            setTimeout(() => {
                ReactDOM.render(<Login />, document.getElementById('app'));
            }, 500);
        } else {
            loginPage.fadeOut(500);
            setTimeout(() => {
                ReactDOM.render(<Signup />, document.getElementById('app'));
            }, 500);
        }
    }

    render () {
        return (
            <div>
                <header className='header'>
                    <img className='logo' src={logo} alt='Logo' onClick={this.handleImageClick}/>
                    <div className={this.state.className} onClick={this.handleButtonClick}>
                        <p>{this.state.buttonText}</p>
                    </div>
                    <img className='menuicon' src={menuicon} alt='Menu icon' onClick={this.handleMenuClick}/>
                    {/* <div className='animation'>
                        <div></div>
                        <div></div>
                    </div> */}
                </header>
                {/* <div className='menu'>
                    <div>
                        <img src={searchicon} alt='Search'/>
                        <input id='search' title='search' type='text'></input>
                    </div>
                    <p>sdfsdf</p>
                    <p>sdfsdf</p>
                </div> */}
                <Menu page={this.props.page}/>
            </div>
        )
    }
}