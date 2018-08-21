import React from 'react';
import './Signup.css';

export class Signup extends React.Component {
    constructor (props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick () {
        var MongoClient = require('../node_modules/mongodb').MongoClient;
        var url = 'mongodb://localhost:27017/nuntium';
        MongoClient.connect(url, (err, db) => {
            if (err) {
                throw err;
            }
            console.log('Database created');
        })
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
                    <input title='username' autoComplete='on'></input>
                    <p>Email</p>
                    <input title='email' autoComplete='on'></input>
                    <p>Password</p>
                    <input title='password' autoComplete='on'></input>
                    <br />
                    <br />
                    <button onClick={this.handleClick}>Sign Up</button>
                </div>
            </div>
        )
    }
}