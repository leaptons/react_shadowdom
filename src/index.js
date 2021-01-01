import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


// Select our shadow host
let extensionRoot = document.getElementById('extension-host');

console.log('rendering shawdow root');
console.log(extensionRoot);
if (extensionRoot) {
    // Create the shadow root
    const shadowRoot = extensionRoot.shadowRoot;

    if (shadowRoot) {
        let div = shadowRoot.getElementById('extension');
        if (!div) {
            // Create a div element
            div = document.createElement('div');
            div.setAttribute('id', 'extension');

            // Append div to shadow DOM
            shadowRoot.appendChild(div);
            ReactDOM.render(<App/>, div);
        }
    }
} 

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
