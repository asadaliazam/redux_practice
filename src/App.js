import React, { Component } from 'react';
import TodoList from './components/TodoList.js';
import AddTodo from './components/AddTodo.js';
import FooterMenu from './components/FooterMenu.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <AddTodo />
        <TodoList />
        <FooterMenu />
      </div>
    );
  }
}

export default App;
