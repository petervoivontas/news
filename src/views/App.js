import React from 'react';
import logo from '../icons/logo.png'
import menuicon from '../icons/menuicon.png';
import { Feed } from './Feed';
import { Profile } from './Profile';
import '../styles/Header.css';
const config = require('../config');

export class App extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            page: 'home'
        }
        this.handleButtonClick = this.handleButtonClick.bind(this);
        this.handleImageClick = this.handleImageClick.bind(this);
        this.handleSignup = this.handleSignup.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
    }

    ip = config.ip;

    handleButtonClick () {
        if (this.state.page === 'home') {
            this.setState({
                page: 'signup'
            });
        } else if (this.state.page === 'signup') {
            this.setState ({
                page: 'login'
            });
        } else if (this.state.page === 'login') {
            this.setState({
                page: 'signup'
            });
        }
    }

    handleImageClick () {
        if (this.state.page !== 'home') {
            this.setState({
                page: 'home'
            });
        }
    }

    handleSignup () {
        fetch(`http://${this.ip}:4000/signup`, {
            method: 'POST',
            body: JSON.stringify({
                name: document.getElementById('username').value,
                email: document.getElementById('email').value,
                password: document.getElementById('password').value
            }),
            headers:{
                'Content-Type': 'application/json'
            },
        }).then(response => {
            if (response.ok) {
                return response.json();
            }
            throw new Error('Request failed');
        }, networkError => console.log(networkError)
        ).then(jsonResponse => {
            console.log(jsonResponse);
        });
    }

    handleLogin () {
        fetch(`http://${this.ip}:4000/login`, {
            method: 'POST',
            body: JSON.stringify({
                email: document.getElementById('email').value,
                password: document.getElementById('password').value
            }),
            headers:{
                'Content-Type': 'application/json'
            },
        }).then(response => {
            if (response.ok) {
                return response.json();
            }
            throw new Error('Request failed');
        }, networkError => console.log(networkError)
        ).then(jsonResponse => {
            console.log(jsonResponse);
            if (jsonResponse) {
                this.setState({
                    page: 'profile',
                    name: jsonResponse.name,
                    email: jsonResponse.email,
                    password: jsonResponse.password
                });
            }
        });
    }

    render () {
        let home = (
            <div>
                <header className='header'>
                    <img className='logo' src={logo} alt='Logo' onClick={this.handleImageClick}/>
                    <div className='signupbutton' onClick={this.handleButtonClick}>
                        <p>Sign Up</p>
                    </div>
                    <img className='menuicon' src={menuicon} alt='Menu icon'/>
                </header>
                <Feed />
            </div>   
        );

        let signup = (
            <div>
                <header className='header'>
                    <img className='logo' src={logo} alt='Logo' onClick={this.handleImageClick}/>
                    <div className='loginbutton' onClick={this.handleButtonClick}>
                        <p>Log In</p>
                    </div>
                    <img className='menuicon' src={menuicon} alt='Menu icon'/>
                </header>
                <div>
                    <p>Your opinion matters</p>
                    <hr />
                    <p>Sign up to Nuntium</p>
                </div>
                <div>
                    <p>Your name</p>
                    <input id='username' title='username' type='text' autoComplete='on'></input>
                    <p>Email</p>
                    <input id='email' title='email' type='email' autoComplete='on'></input>
                    <p>Password</p>
                    <input id='password' title='password' type='password' autoComplete='on'></input>
                    <br />
                    <br />
                    <button onClick={this.handleSignup}>Sign Up</button>
                </div>
            </div>
        );

        let login = (
            <div>
                <header className='header'>
                    <img className='logo' src={logo} alt='Logo' onClick={this.handleImageClick}/>
                    <div className='signupbutton' onClick={this.handleButtonClick}>
                        <p>Sign Up</p>
                    </div>
                    <img className='menuicon' src={menuicon} alt='Menu icon'/>
                </header>
                <div>
                    <p>Your opinion matters</p>
                    <hr />
                    <p>Welcome back to Nuntium</p>
                </div>
                <div>
                    <p>Email</p>
                    <input id='email' title='email' type='email' autoComplete='on'></input>
                    <p>Password</p>
                    <input id='password' title='password' type='password' autoComplete='on'></input>
                    <br />
                    <br />
                    <button onClick={this.handleLogin}>Log In</button>
                </div>
            </div>
        );

        let profile = (
            <div>
                <header className='header'>
                    <img className='logo' src={logo} alt='Logo' onClick={this.handleImageClick}/>
                    <div className='signupbutton' onClick={this.handleButtonClick}>
                        <p className='buttontext'>Log In</p>
                    </div>
                    <img className='menuicon' src={menuicon} alt='Menu icon'/>
                </header>
                <Profile name={this.state.name} email={this.state.email} password={this.state.password}/>
            </div>
        );

        if (this.state.page === 'home') {
            return home;
        } else if (this.state.page === 'signup') {
            return signup;
        } else if (this.state.page === 'login') {
            return login;
        } else {
            return profile;
        }
    }
}
