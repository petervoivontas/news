import React from 'react';
import './Header.css';

export class Header extends React.Component {
    render ()  {
        return (
            <header className='header'>
                <img src='favicon.ico' alt='logo' className='logo'/>
                <p className='home'>Home</p>
                <p className='explore'>Explore</p>
                <p className='profile'>Profile</p>
            </header>
        )
    }
}