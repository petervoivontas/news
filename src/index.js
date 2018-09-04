import React from 'react';
import ReactDOM from 'react-dom';
import { Home } from './views/Home';
import './styles/index.css';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Home />, document.getElementById('app'));
registerServiceWorker();
