import React from 'react';

const TodoItems = ({ todos, deleteTodo }) =>
  todos.map((todo, i) => (
    <div className="todo" key={`todo-${todo.id}`}>
      <h5>Todo item {i + 1}</h5>
      <p>Id: {todo.id}</p>
      <p>Description: {todo.description}</p>
      <p>Completed: {todo.completed.toString()}</p>
      <button
        className="deleteButton buttonStyles"
        onClick={() => deleteTodo(todo.id)}
      >
        delete todo
      </button>
    </div>
  ));

export default TodoItems;
