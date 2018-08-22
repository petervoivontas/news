import React from 'react';
import './Signup.css';

export class Signup extends React.Component {
    constructor (props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick () {
        window.location.replace(`http://localhost:3056/signup?name=${document.getElementById('username').value}&email=${document.getElementById('email').value}&password=${document.getElementById('password').value}`);
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