import React from 'react';
import logo from './logo.png'
import menuicon from './menuicon.png';
import { Feed } from './Feed';
import { Signup } from './Signup';
import './header.css';

export class App extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            page: 'home'
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick () {
        if (this.state.page === 'home') {
            this.setState({
                page: 'signup'
            });
        } else if (this.state.page === 'signup') {
            this.setState ({
                page: 'home'
            });
        }
    }

    render () {
        let home = (
            <div>
                <header className='header'>
                    <img className='logo' src={logo} alt='Logo'/>
                    <div className='signupbutton' onClick={this.handleClick}>
                        <p className='buttontext'>Sign Up</p>
                    </div>
                    <img className='menuicon' src={menuicon} alt='Menu icon'/>
                </header>
                <Feed/>
            </div>   
        );

        let signup = (
            <div>
                <header className='header'>
                    <img className='logo' src={logo} alt='Logo'/>
                    <div className='signupbutton' onClick={this.handleClick}>
                        <p className='buttontext'>Log In</p>
                    </div>
                    <img className='menuicon' src={menuicon} alt='Menu icon'/>
                </header>
                <Signup />
            </div>
        );

        if (this.state.page === 'home') {
            return home;
        } else {
            return signup;
        }

    }
}