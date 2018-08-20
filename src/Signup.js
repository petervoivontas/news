import React from 'react';
import ReactDOM from 'react-dom';
import { Header } from './Header';
import './Signup.css';

export class Signup extends React.Component {
    render () {
        return (
            <div>
                <Header/>
                <div>
                    <p>Your opinion matters</p>
                    <hr />
                    <p>Sign up to Nuntium</p>
                </div>
                <div>
                    <form>
                        <input title='username' autoComplete='on'></input>
                        <input title='email' autoComplete='on'></input>
                        <input title='password' autoComplete='on'></input>
                    </form>
                </div>
            </div>
        )
    }
}

ReactDOM.render(<Signup />, document.getElementById('signup'));