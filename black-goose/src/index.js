import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// import Html from './App';
// import Html from './components/li/index';
import Html from '../src/components/zhao';
// import Html from './components/home';
// import Html from './html-Xs/index'

import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Html />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
