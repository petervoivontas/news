import React from 'react';
import logo from './logo.png'
import menuicon from './menuicon.png';
// import { App } from './App';
import './Header.css';

export class Header extends React.Component {
    render ()  {
        return (
            <header className='header'>
                <img className='logo' src={logo} alt='Logo'/>
                    <div className='signupbutton'>
                        <p className='buttontext'>Sign Up</p>
                    </div>
                <img className='menuicon' src={menuicon} alt='Menu icon'/>
            </header>
        )
    }
}