import React from 'react';
import menuicon from './menuicon.png';
import './Header.css';

export class Header extends React.Component {
    render ()  {
        return (
            <header className='header'>
                <img src='favicon.ico' alt='logo' className='logo'/>
                <img src={menuicon} alt='menu icon' className='menuicon'/>
            </header>
        )
    }
}