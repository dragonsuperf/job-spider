import '@babel/polyfill'
// import 'core-js/stable'
// import 'regenerator-runtime/runtime'
import React from 'react'
import ReactDOM from 'react-dom'
import { App } from './components/App'
import '../public/bootstrap.css';
import '../public/App.css'


console.log(App)

ReactDOM.render(
    <App />, 
    document.getElementById('root')
)
