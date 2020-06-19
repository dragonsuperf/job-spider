import React from 'react';
import ReactDOM from 'react-dom';
import './style/index.css';
import './style/container.css'
import './style/recruitTable.css'
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
