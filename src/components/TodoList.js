import React from "react";

const TodoList = ({ todos, toggleComplete, deleteTodo }) => {
  return (
    <ul style={{ listStyleType: "none", padding: 0 }}>
      {todos.map((todo) => (
        <li key={todo.id} style={{ display: "flex", alignItems: "center", marginBottom: "10px" }}>
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => toggleComplete(todo.id)}
            style={{ marginRight: "10px" }}
          />
          <span style={{ textDecoration: todo.completed ? "line-through" : "none", flexGrow: 1 }}>
            {todo.text}
          </span>
          <button
            onClick={() => deleteTodo(todo.id)}
            style={{ marginLeft: "10px", backgroundColor: "red", color: "white", padding: "5px 10px", border: "none", borderRadius: "4px", cursor: "pointer" }}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
