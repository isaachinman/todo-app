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
    //am I supposed to use const in front of method name? unable to, only for .ts files error???
    event.preventDefault();
    if (this.state.newTodo.description) {
      const todo = {
        id: v4(),
        description: this.state.newTodo.description,
        completed: false,
      };
      this.setState({
        todos: [todo, ...this.state.todos],
        newTodo: { description: '' }, //removed spread from here, good or bad idea?
      });
    }
  };

  handleDelete = id => {
    const newTodos = this.state.todos.filter(todo => todo.id !== id);
    this.setState({
      todos: newTodos,
    });
  };

  handleChange = event => {
    this.setState({
      newTodo: {
        // ...this.state.newTodo,    //originally had this spread implemented then tried to simplify
        // the code as I think it's not needed, good practise or not?
        description: event.target.value,
      },
    });
  };

  handleToggleTodo = id => {
    //probably a better way to do this but took me a while to get this working
    const todoPosition = this.state.todos.findIndex(todo => todo.id === id);
    const newTodos = this.state.todos;
    newTodos[todoPosition].completed = !newTodos[todoPosition].completed;
    this.setState({ todos: newTodos });
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
