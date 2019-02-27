import React from 'react';

const TodoItems = ({ todos, deleteTodo, toggleTodo }) =>
  todos.map((
    todo,
    i // map returns array, is the returned array accepted ok to be rendered in a div not a ul?
  ) => (
    <div className="todoItemsContainer" key={`todo-${todo.id}`}>
      <div className="todo">
        <h5>Todo item {i + 1}</h5>
        <p>Id: {todo.id}</p>
        <p style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
          Description: {todo.description}
        </p>
        <label htmlFor="todoCompleted">Completed</label>
        <input
          type="checkbox"
          id="todoCompleted"
          checked={todo.completed} //getting an error in console for this, use defaultchecked??
          onClick={() => toggleTodo(todo.id)} // better to use onclick or onchange?
        />
      </div>
      <button
        className="deleteButton buttonStyles"
        onClick={() => deleteTodo(todo.id)} //is this id not only set when the map is done? does it persist after? is each button associated with a component here
      >
        Delete Todo
      </button>
    </div>
  ));

export default TodoItems;
