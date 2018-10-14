// Dependencies
import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import firebase, {auth, provider} from '../firebase/firebase';

// Components
import {Header} from './Header';

// Stylesheet
import '../styles/Signup.css';
import { Home } from './Home';

// Constants
const config = require('../config');

export class Signup extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            ip: config.ip
        }
        this.handleSignup = this.handleSignup.bind(this);
    }

    componentDidMount () {
        const signupPage = $('.signupPage');
        signupPage.hide();
        signupPage.fadeIn(500);
    }

    // handleSignup () {
    //     const signupPage = $('.signupPage');
    //     const name = $('#username').val().trim();
    //     const email = $('#email').val().trim();
    //     const password = $('#password').val().trim();

    //     if (name !== '' && email !== '' && password !== '') {
    //         fetch(`http://${this.state.ip}:4000/users/signup`, {
    //             method: 'POST',
    //             body: JSON.stringify({
    //                 name: document.getElementById('username').value,
    //                 email: document.getElementById('email').value,
    //                 password: document.getElementById('password').value
    //             }),
    //             headers:{
    //                 'Content-Type': 'application/json'
    //             },
    //         }).then(response => {
    //             if (response.ok) {
    //                 return response.json();
    //             }
    //             throw new Error('Request failed');
    //         }, networkError => console.log(networkError)
    //         ).then(jsonResponse => {
    //             console.log(jsonResponse);
    //             signupPage.fadeOut(500);
    //             setTimeout(()=> {
    //                 ReactDOM.render(<Home firstRender={false} name={jsonResponse.name} email={jsonResponse.email} password={jsonResponse.password}/>, document.getElementById('app'));
    //             }, 500);
    //         });
    //     } else if (name === '' && email === '' && password === '') {
    //         console.log('Enter your info');
    //     } else if (name === '') {
    //         console.log('Name cannot be empty');
    //     } else if (email === '') {
    //         console.log('Email cannot be empty');
    //     } else {
    //         console.log('Password cannot be empty');
    //     }
    // }

    handleSignup () {
        auth.signInWithPopup(provider)
            .then((result) => {
                const user = result.user;
                this.setState({
                    user: user
                });
            })
    }

    render () {
        // return (
        //     <div className='signupPage'>
        //         <Header page='signup' />
        //         <div>
        //             <p>Your opinion matters</p>
        //             <hr />
        //             <p>Sign up to Nuntium</p>
        //         </div>
        //         <div className='form'>
        //             <input id='username' title='username' type='text' autoComplete='on' placeholder='Your name'></input>
        //             <input id='email' title='email' type='email' autoComplete='on' placeholder='email'></input>
        //             <input id='password' title='password' type='password' autoComplete='on' placeholder='password'></input>
        //             <br />
        //             <br />
        //             <button id='submit' onClick={this.handleSignup}>Sign Up</button>
        //         </div>
        //     </div>
        // )
        return (
            <button onClick={this.handleSignup}>Sign Up</button>
        )
    }
}