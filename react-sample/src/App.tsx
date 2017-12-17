/// <reference path="./components/interface.d.ts" />

import * as React from 'react';
import TodoList from './components/TodoList';
import AddButton from './components/AddButton'

import './App.css';

class App extends React.Component<{}, IAppState> {
  constructor(prop: {}) {
    super(prop);

    this.state = {todos: [ 
      { id: '1', text: 'Todo1', checked: false},
      { id: '2', text: 'Todo2', checked: false},
      { id: '3', text: 'Todo3', checked: false},
    ]};

    this.checkTodo = this.checkTodo.bind(this);	
    this.addTodo = this.addTodo.bind(this);
  }

  addTodo(text: string) {
    this.setState(
      {
        todos: [...this.state.todos, { id: this.state.todos.length.toString(), text: text, checked: false }]
      }
    );
  }

  checkTodo(id: string) {
    const todos = [...this.state.todos];
    todos.forEach((todo) => {
      if (todo.id === id) {
        todo.checked = !todo.checked;
      }
    });
    this.setState(
      { todos: todos }
    );
  }

  render() {
    return (
      <div className="App">
        <h2 className="title">TODOサンプルアプリケーション</h2>
        <AddButton addTodoAction={this.addTodo} />
        <TodoList todos={this.state.todos} checkTodoAction={this.checkTodo} />
      </div>
    );
  }
}

export default App;
