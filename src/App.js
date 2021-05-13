import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Game from './Game'
import { withAuthenticator } from 'aws-amplify-react'
import Amplify, { Auth } from 'aws-amplify';
import aws_exports from './aws-exports';
Amplify.configure(aws_exports);

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
<<<<<<< HEAD
          <Game/>
=======
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
>>>>>>> parent of d9dbe3c... Implemented ListTodos
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
}

export default withAuthenticator(App, true);
