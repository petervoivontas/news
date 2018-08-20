import React from 'react';
import logo from './logo.png'
import menuicon from './menuicon.png';
import './Header.css';

export class Header extends React.Component {
    render ()  {
        return (
            <header className='header'>
                <img className='logo' src={logo} alt='Logo'/>
                <a href='../signup.html'>
                    <div className='signupbutton' >
                        <p className='buttontext'>Sign Up</p>
                    </div>
                </a>
                <img className='menuicon' src={menuicon} alt='Menu icon'/>
            </header>
        )
    }
}