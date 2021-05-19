import React, { Component } from 'react';
import Game from './Game';
import List from './List';
import UserInterface from './UserInterface';
import logo from './logo.svg';
import './App.css';
import { withAuthenticator } from 'aws-amplify-react';
import Amplify, { Auth } from 'aws-amplify';
import aws_exports from './aws-exports';
import UserInterface from './UserInterface';
Amplify.configure(aws_exports);

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <UserInterface/>
          <Game/>
        </header>
      </div>
    );
  }
}

export default withAuthenticator(App, true);
