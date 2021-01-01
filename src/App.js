import React from "react";
import './App.css';
import logo from './logo192.png';
import $ from 'jquery';

const ENV = 'PROD';

const API_PATH_PROD = "https://leaptons-web-server.ue.r.appspot.com";
const API_PATH_LOCAL = "http://localhost:8080";

const API_METHOD_OFFER = "/_/v1/offer";

let OFFER_URL = ''
if (ENV === 'PROD') {
  // End point for production.
  OFFER_URL = API_PATH_PROD + API_METHOD_OFFER;
} else {
  OFFER_URL = API_PATH_LOCAL + API_METHOD_OFFER;
}


class App extends React.Component {
  render() {
    console.log('react render');
    return (
      <div className="App">
        <header className="App-header">
        <img src={logo} style={{"height": "100px"}} alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }

  componentWillMount() {
    console.log('componentWillMount, sending message');
    window.chrome.runtime.sendMessage(
      {message: "fetch_react_props"},
      (response) => {
          console.log(response.product);
       }
    );

  }
}

export default App;
