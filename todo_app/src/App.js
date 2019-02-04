import React, { Component } from 'react';
import todos from './todos';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Todo list</h1>
        </header>
        <main>
          <div>
            {todos.map(({ userId, title, completed, id }) => (
              <React.Fragment key={id}>
                <p>UserId: {userId}</p>
                <p>Title: {title}</p>
                <p>Completed: {completed.toString()}</p>
                <br />
              </React.Fragment>
            ))}
          </div>
        </main>
      </div>
    );
  }
}

export default App;
