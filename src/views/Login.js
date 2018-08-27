import React from 'react';
import { App } from './App';
import '../styles/Login.css';
const config = require('../config');

export class Login extends React.Component {
    constructor (props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.state = {
            page: 'login'
        };
    }

    ip = config.ip; // IP is set in config.js

    handleClick () {
        fetch(`http://localhost:4000/login`, {
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
                    response: jsonResponse
                });
            }
        });
    }

    render () {
        let login = (
            <div>
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
                    <button onClick={this.handleClick}>Log In</button>
                </div>
            </div>
        );

        if (this.state.page === 'login') {
            return login;
        } else {
            return <App page='profile' name={this.state.response.name} email={this.state.response.email} password={this.state.response.password}/>
        }
    }
}