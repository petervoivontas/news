import React from 'react';
import '../styles/Signup.css';
const config = require('../config');

export class Signup extends React.Component {
    constructor (props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    ip = config.ip; // IP is set in config.js

    handleClick () {
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

    render () {
        return (
            <div>
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
                    <button onClick={this.handleClick}>Sign Up</button>
                </div>
            </div>
        )
    }
}