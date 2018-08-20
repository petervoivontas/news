import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import {Home} from './Home';
// import {Signup} from './Signup';
import { App } from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
