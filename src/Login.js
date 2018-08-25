import React from 'react';

export class Login extends React.Component {
    handleClick () {
        fetch('http://192.168.2.10:4000/login', {
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
        )
    }
}