import React, { Component } from 'react';
import { v4 } from 'uuid';
import './App.css';
import existingTodos from './initialTodoState';

class App extends Component {
  state = {
    newTodo: {
      description: '',
    },
    todos: existingTodos,
  };

  handleSubmit = event => {
    event.preventDefault();
    const todo = {
      id: v4(),
      description: this.state.newTodo.description,
      completed: false,
    };
    this.setState({
      todos: [todo, ...this.state.todos],
      newTodo: { ...this.state.newTodo, description: '' },
    });
  };

  handleChange = event => {
    this.setState({
      newTodo: {
        ...this.state.newTodo,
        description: event.target.value,
      },
    });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Current Todo list</h1>
        </header>
        <main>
          <div>
            {this.state.todos.map(({ description, completed, id }, i) => (
              <div className="todo" key={`todo-${id}`}>
                <h5>Todo item {i + 1}</h5>
                <p>Id: {id}</p>
                <p>Description: {description}</p>
                <p>Completed: {completed.toString()}</p>
                <br />
              </div>
            ))}
            <h2>Add New Todos</h2>
            <form onSubmit={this.handleSubmit}>
              <label>
                Add new Todo item
                <input
                  type="text"
                  value={this.state.newTodo.description}
                  onChange={this.handleChange}
                  required
                />
              </label>
              <button onClick={this.handleSubmit}>Add Todo</button>
            </form>
            <br />
          </div>
        </main>
      </div>
    );
  }
}

export default App;
