import React, { Component } from 'react';
import { comments } from './comments';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>List of comments</h1>
          <div>
            {comments.map(comment => (
              <React.Fragment key={comment.id}>
                <p>Name: {comment.name}</p>
                <p>Email: {comment.email}</p>
                <p>Body: {comment.body}</p>
                <br />
              </React.Fragment>
            ))}
          </div>
        </header>
      </div>
    );
  }
}

export default App;
