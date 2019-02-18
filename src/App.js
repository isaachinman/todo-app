import React, { Component } from 'react';
import { v4 } from 'uuid';
import './App.css';

class App extends Component {
  state = {
    tempDescription: '',
    todos: [
      {
        id: v4(),
        description: 'delectus aut autem',
        completed: false,
      },
      {
        id: v4(),
        description: 'quis ut nam facilis et officia qui',
        completed: false,
      },
      {
        id: v4(),
        description: 'fugiat veniam minus',
        completed: false,
      },
      {
        id: v4(),
        description: 'et porro tempora',
        completed: true,
      },
    ],
  };

  handleSubmit = event => {
    event.preventDefault(); //not sure why I had to add this but read about it online - it fixed an issue with the todo not appearing on the screen
    const todo = {
      id: v4(),
      description: this.state.tempDescription,
      completed: false,
    };
    this.setState({
      todos: [todo, ...this.state.todos],
      tempDescription: '',
    });
  };

  handleChange = event => {
    this.setState({ tempDescription: event.target.value });
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
            <div>
              <form onSubmit={this.handleSubmit}>
                <label>
                  Add new Todo item
                  <input
                    type="text"
                    value={this.state.tempDescription}
                    onChange={this.handleChange}
                    required
                  />
                </label>
                <button onClick={this.handleSubmit}>Add Todo</button>
              </form>
            </div>
            <br />
          </div>
        </main>
      </div>
    );
  }
}

export default App;
