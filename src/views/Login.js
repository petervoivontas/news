// Dependencies
import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

// Components
import { Home } from './Home';
import { Header } from './Header';

// Stylesheet
import '../styles/Login.css';

// Constants
const config = require('../config');

export class Login extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            ip: config.ip
        }
        this.handleLogin = this.handleLogin.bind(this);
    }

    componentDidMount () {
        const loginPage = $('.loginPage');
        loginPage.hide();
        loginPage.fadeIn(500);
    }

    handleLogin () {
        const email = $('#email').val().trim();
        const password = $('#password').val().trim();

        if (email !== '' && password !== '') {
            fetch(`http://${this.state.ip}:4000/users/login`, {
                method: 'POST',
                body: JSON.stringify({
                    email: email,
                    password: password
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
                $('.loginPage').fadeOut(500);
                setTimeout(() => {
                    ReactDOM.render(<Home firstRender={false} name={jsonResponse.name} email={jsonResponse.email} password={jsonResponse.password}/>, document.getElementById('app'));
                }, 500);
            });
        } else if (email === '' && password === '') {
            console.log('Email and password are required');
        } else if (email === '') {
            console.log('Email cannot be empty');
        } else {
            console.log('Password cannot be empty');
        }
    }

    render () {
        return (
            <div className='loginPage'>
                <Header page='login' />
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
        )
    }
}