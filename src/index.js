import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './views/App';
import './styles/index.css';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
