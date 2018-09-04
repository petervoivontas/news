// Dependencies
import React from 'react';
import $ from 'jquery';

// Components
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
        $('.login').hide();
        $('.login').fadeIn(500);
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