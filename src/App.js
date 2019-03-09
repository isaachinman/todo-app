import React, { Component } from 'react';
import { v4 } from 'uuid';
import './App.css';
import existingTodos from './initialTodoState';
import TodoItems from './TodoItems';
import TodoForm from './TodoForm';

class App extends Component {
  state = {
    newTodo: {
      description: '',
    },
    todos: existingTodos,
  };

  handleSubmit = event => {
    event.preventDefault();
    if (this.state.newTodo.description) {
      const todo = {
        id: v4(),
        description: this.state.newTodo.description,
        completed: false,
      };
      this.setState({
        todos: [todo, ...this.state.todos],
        newTodo: { description: '' },
      });
    }
  };

  handleDelete = id => {
    const newTodos = this.state.todos.filter(todo => todo.id !== id);
    this.setState({
      todos: newTodos,
    });
  };

  handleDueDate = (e, id) => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.dueDate = e.target.value;
        }
        return todo;
      }),
    });
  };

  handleChange = event => {
    this.setState({
      newTodo: {
        description: event.target.value,
      },
    });
  };

  handleToggleTodo = id => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      }),
    });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <TodoForm
            handleSubmit={this.handleSubmit}
            handleChange={this.handleChange}
            newTodoDescription={this.state.newTodo.description}
          />
        </header>
        <main>
          <h3>Current Todo list</h3>
          <div>
            <TodoItems
              todos={this.state.todos}
              dueDate={this.state.dueDate}
              setDueDate={this.handleDueDate}
              deleteTodo={this.handleDelete}
              toggleTodo={this.handleToggleTodo}
            />
          </div>
        </main>
      </div>
    );
  }
}

export default App;
