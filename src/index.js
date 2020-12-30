import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


// Add our extension to the document
const extensionRoot = document.createElement('div');
extensionRoot.id = 'extension';
document.body.appendChild(extensionRoot);
ReactDOM.render(<App />, extensionRoot);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
