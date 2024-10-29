import React, { useState } from "react";

function generateId() {
  return Math.floor(Math.random() * 10000); // Generate a larger range for unique IDs
}

const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  const handleSubmit = () => {
    if (input.trim()) {
      // Prevent adding empty todos
      setTodos((prevTodos) => [
        ...prevTodos,
        { text: input, id: generateId() },
      ]);
      setInput("");
    }
  };

  const removeTodo = (id) => {
    setTodos((todos) => todos.filter((t) => t.id !== id));
  };

  return (
    <>
      <div className="container">
        <input
          type="text"
          placeholder="New Todo"
          value={input}
          onChange={(e) => setInput(e.target.value)} // Corrected to setInput
        />
        <button className="increment" onClick={handleSubmit}>
          Submit
        </button>
        <ul className="todos-list">
          {todos.map(({ text, id }) => (
            <li key={id} className="todo">
              <span>{text}</span>
              <button
                className="close increment"
                onClick={() => removeTodo(id)}
              >
                X
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Todo;
