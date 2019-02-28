import React from 'react';

const TodoForm = ({ handleChange, handleSubmit, newTodoDescription }) => {
  return (
    <>
      <h2>Add New Todos</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Add new Todo item
          <input
            type="text"
            value={newTodoDescription}
            onChange={handleChange}
            required
          />
        </label>
        <button className="buttonStyles" onClick={handleSubmit}>
          Add Todo
        </button>
      </form>
      <br />
    </>
  );
};

export default TodoForm;
