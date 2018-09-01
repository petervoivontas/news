import React from 'react';
import logo from '../icons/logo.png'
import menuicon from '../icons/menuicon.png';
import { Feed } from './Feed';
import '../styles/Header.css';
const config = require('../config');

export class App extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            ip: config.ip,
            page: 'home',
            buttonText: 'Sign Up',
            className: 'signupButton',
            signedIn: false
        }
        this.handleButtonClick = this.handleButtonClick.bind(this);
        this.handleImageClick = this.handleImageClick.bind(this);
        this.handleSignup = this.handleSignup.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
        this.handleUpdateName = this.handleUpdateName.bind(this);
        this.handleUpdateEmail = this.handleUpdateEmail.bind(this);
        this.handleUpdatePassword = this.handleUpdatePassword.bind(this);
    }

    handleButtonClick () {
        if (this.state.page === 'home') {
            if (this.state.signedIn) {
                this.setState({
                    page: 'profile',
                    buttonText: 'Sign Out',
                    className: 'signoutButton'
                });
            } else {
                this.setState({
                    page: 'signup',
                    buttonText: 'Log In',
                    className: 'loginButton'
                });
            }
        } else if (this.state.page === 'signup') {
            this.setState ({
                page: 'login',
                buttonText: 'Sign Up',
                className: 'signupButton'
            });
        } else if (this.state.page === 'login') {
            this.setState({
                page: 'signup',
                buttonText: 'Log In',
                className: 'loginButton'
            });
        } else if (this.state.page === 'profile') {
            this.setState({
                page: 'home',
                name: '',
                email: '',
                password: '',
                signedIn: false,
                buttonText: 'Sign Up',
                className: 'signupButton'
            });
        }
    }

    handleImageClick () {
        if (this.state.page !== 'home') {
            if (this.state.signedIn) {
                this.setState({
                    page: 'home',
                    buttonText: 'My Profile',
                    className: 'profileButton'
                });
            } else {
                this.setState({
                    page: 'home',
                    buttonText: 'Sign Up',
                    className: 'signupButton'
                });
            }
        }
    }

    handleSignup () {
        fetch(`http://${this.state.ip}:4000/signup`, {
            method: 'POST',
            body: JSON.stringify({
                name: document.getElementById('username').value,
                email: document.getElementById('email').value,
                password: document.getElementById('password').value
            }),
            headers:{
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
                this.setState({
                    page: 'home',
                    buttonText: 'My Profile',
                    className: 'profileButton',
                    signedIn: true,
                    name: jsonResponse.name,
                    email: jsonResponse.email,
                    password: jsonResponse.password
                });
            }
        });
    }

    handleLogin () {
        fetch(`http://${this.state.ip}:4000/login`, {
            method: 'POST',
            body: JSON.stringify({
                email: document.getElementById('email').value,
                password: document.getElementById('password').value
            }),
            headers:{
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
                this.setState({
                    page: 'home',
                    buttonText: 'My Profile',
                    className: 'profileButton',
                    signedIn: true,
                    name: jsonResponse.name,
                    email: jsonResponse.email,
                    password: jsonResponse.password
                });
            }
        });
    }

    handleUpdateName () {
        if (document.getElementById('newName').value !== this.state.name) {
            fetch(`http://${this.state.ip}:4000/updateName`, {
                method: 'POST',
                body: JSON.stringify({
                    oldEmail: this.state.email,
                    newName: document.getElementById('newName').value
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
                if (jsonResponse.name) {
                    this.setState({
                        name: jsonResponse.name
                    })
                }
            });
        } else {
            console.log('Name is the same as before');
        }
    }

    handleUpdateEmail () {
        if (document.getElementById('newEmail').value !== this.state.email) {
            fetch(`http://${this.state.ip}:4000/updateEmail`, {
                method: 'POST',
                body: JSON.stringify({
                    oldEmail: this.state.email,
                    newEmail: document.getElementById('newEmail').value
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
                if (jsonResponse.email) {
                    this.setState({
                        email: jsonResponse.email
                    });
                }
            });
        } else {
            console.log('Email is the same as before');
        }
    }

    handleUpdatePassword () {        
        fetch(`http://${this.state.ip}:4000/updatePassword`, {
            method: 'POST',
            body: JSON.stringify({
                oldEmail: this.state.email,
                oldPassword: this.state.password,
                newPassword: document.getElementById('newPassword').value
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
            if (jsonResponse.password) {
                this.setState({
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
                    <div className={this.state.className} onClick={this.handleButtonClick}>
                        <p>{this.state.buttonText}</p>
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
                    <div className={this.state.className} onClick={this.handleButtonClick}>
                        <p>{this.state.buttonText}</p>
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
                    <input id='password' title='password' type='password' autoComplete='of'></input>
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
                    <div className={this.state.className} onClick={this.handleButtonClick}>
                        <p>{this.state.buttonText}</p>
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
                    <input id='password' title='password' type='password' autoComplete='off'></input>
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
                    <div className={this.state.className} onClick={this.handleButtonClick}>
                        <p>{this.state.buttonText}</p>
                    </div>
                    <img className='menuicon' src={menuicon} alt='Menu icon'/>
                </header>
                <div>
                    <p>Change your account info</p>

                    <p>Name</p>
                    <input id='newName' title='newName' type='text' autoComplete='on'></input>
                    <br/>
                    <br/>
                    <button onClick={this.handleUpdateName}>Change name</button>
                    <br/>
                    <br/>

                    <p>Email</p>
                    <input id='newEmail' title='newEmail' type='email' autoComplete='on'></input>
                    <br/>
                    <br/>
                    <button onClick={this.handleUpdateEmail}>Change email</button>
                    <br/>
                    <br/>

                    <p>Password</p>
                    <input id='newPassword' title='newPassword' type='password' autoComplete='off'></input>
                    <br/>
                    <br/>
                    <button onClick={this.handleUpdatePassword}>Change password</button>
                </div>
            </div>
        );

        if (this.state.page === 'home') {
            return home;
        } else if (this.state.page === 'signup') {
            return signup;
        } else if (this.state.page === 'login') {
            return login;
        } else if (this.state.page === 'profile') {
            return profile;
        }
    }
}
