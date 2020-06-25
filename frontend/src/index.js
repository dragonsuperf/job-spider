import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import './style/index.css';
import './style/container.css'
import './style/recruitTable.css'
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore } from 'redux'

// const store = createStore()

ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
, document.getElementById('root'));
registerServiceWorker();
