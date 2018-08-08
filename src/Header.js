import React from 'react';
import logo from './icons/favicon.ico'
import menuicon from './icons/menuicon.png';
import './Header.css';

export class Header extends React.Component {
    render ()  {
        return (
            <header className='header'>
                <img src={logo} alt='logo' className='logo'/>
                <img src={menuicon} alt='menu icon' className='menuicon'/>
            </header>
        )
    }
}