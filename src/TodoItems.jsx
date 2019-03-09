import React from 'react';

const TodoItems = ({ todos, setDueDate, deleteTodo, toggleTodo }) =>
  todos.map((todo, i) => {
    return (
      <div className="todoItemsContainer" key={`todo-${todo.id}`}>
        <div className="todo">
          <h5>Todo item {i + 1}</h5>
          <p>Id: {todo.id}</p>
          <p
            style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
          >
            Description: {todo.description}
          </p>
          <label htmlFor="dueDate">Due date:</label>
          <input
            type="date"
            id="dueDate"
            min="2019-03-09"
            value={todo.dueDate}
            onChange={e => setDueDate(e, todo.id)}
          />
          <label htmlFor="todoCompleted">Completed</label>
          <input
            type="checkbox"
            id="todoCompleted"
            checked={todo.completed}
            onChange={() => toggleTodo(todo.id)}
          />
        </div>
        <button
          className="deleteButton buttonStyles"
          onClick={() => deleteTodo(todo.id)}
        >
          Delete Todo
        </button>
      </div>
    );
  });

export default TodoItems;
