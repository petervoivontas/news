import React from 'react';
import ReactDOM from 'react-dom';
import logo from '../icons/logo.png';
import menuicon from '../icons/menuicon.png';
import { Home } from './Home';
import { Signup } from './Signup';
import { Login } from './Login';
import '../styles/Header.css';

export class Header extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            buttonText: 'Sign Up',
            className: 'signupButton'
        }
        this.handleImageClick = this.handleImageClick.bind(this);
        this.handleButtonClick = this.handleButtonClick.bind(this);
    }

    componentWillMount () {
        if (this.props.page === 'signup') {
            this.setState({
                buttonText: 'Log In',
                className: 'loginButton'
            });
        } else if (this.props.page === 'login') {
            this.setState({
                buttonText: 'Sign Up',
                className: 'signupButton'
            });
        }
    }

    handleImageClick () {
        if (this.props.page) {
            ReactDOM.render(<Home />, document.getElementById('app'));
        }
    }

    handleButtonClick () {
        if (this.props.page === 'signup') {
            ReactDOM.render(<Login />, document.getElementById('app'));
        } else if (this.props.page === 'login') {
            ReactDOM.render(<Signup />, document.getElementById('app'));
        } else {
            ReactDOM.render(<Signup />, document.getElementById('app'));
        }
    }

    render () {
        return (
            <header className='header'>
                <img className='logo' src={logo} alt='Logo' onClick={this.handleImageClick}/>
                <div className={this.state.className} onClick={this.handleButtonClick}>
                    <p>{this.state.buttonText}</p>
                </div>
                <img className='menuicon' src={menuicon} alt='Menu icon'/>
            </header>
        )
    }
}