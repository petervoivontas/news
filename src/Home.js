import React from 'react';
import { Header } from './Header';
// import {Feed} from './Feed';
import './Home.css';

export class Home extends React.Component {
  render () {
    return (
      <div>
        <Header/>
        {/**<Feed/>*/}
      </div>
    );
  }
}
