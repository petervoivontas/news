import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import { Home } from './views/Home';
import './styles/index.css';
import registerServiceWorker from './registerServiceWorker';

$('body').css({
    'width': $(window).width(),
    'height': $(window).height()
})

console.log($(window).width(), $(window).height());

ReactDOM.render(<Home />, document.getElementById('app'));
registerServiceWorker();
