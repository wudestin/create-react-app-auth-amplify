import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { withAuthenticator } from 'aws-amplify-react'
import Amplify, { Auth, API } from 'aws-amplify';
import aws_exports, { awsconfig } from './aws-exports';

import * as queries from './graphql/queries';
import * as mutations from './graphql/mutations';
import * as subscriptions from './graphql/subscriptions';

Amplify.configure(aws_exports);
Amplify.configure(awsconfig);

function TodoList(inputList) {
  const todos = inputList.query;
  const listItems = todos.map((todo) =>
  <li key={todo.id}>
    {todo.name} ({todo.priority}): {todo.description}
  </li>
  );
  return (
    <ul>{listItems}</ul>
  )
}

// Simple query
const todos = await API.graphql({
  query: queries.listTodos,
  authMode: 'AWS_IAM'
});

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <TodoList todos={todos} />
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
