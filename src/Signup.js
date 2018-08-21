import React from 'react';
import { insertUsers } from './users_mongodb_insert';
import './Signup.css';

export class Signup extends React.Component {
    constructor (props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick () {
        let username = document.getElementById('username').nodeValue;
        let email = document.getElementById('email').nodeValue;
        let password = document.getElementById('passwowrd').nodeValue;
        console.log(username, email, password);
        insertUsers(username, email, password);
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
                    <input id='username'title='username' autoComplete='on'></input>
                    <p>Email</p>
                    <input id='email' title='email' autoComplete='on'></input>
                    <p>Password</p>
                    <input id='password' title='password' autoComplete='on'></input>
                    <br />
                    <br />
                    <button onClick={this.handleClick}>Sign Up</button>
                </div>
            </div>
        )
    }
}