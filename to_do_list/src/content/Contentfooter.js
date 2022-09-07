import React from "react";
import { useToDo } from "../contexts/ToDoContext";

function Contentfooter() {
  const { todos, filter, setFilter, setToDos } = useToDo();

  const clearCompleted = () => 
    setToDos((prev)=>prev.filter((todo) => todo.completed === false));
  

  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>{todos.length} </strong>
        {todos.length > 1 ? "items" : "item"} left
      </span>

      <ul className="filters">
        <li>
          <a
            href="#/"
            onClick={() => setFilter("all")}
            className={`${filter === "all" ? "selected" : ""}`}
          >
            All
          </a>
        </li>
        <li>
          <a
            href="#/"
            onClick={() => setFilter("active")}
            className={`${filter === "active" ? "selected" : ""}`}
          >
            Active
          </a>
        </li>
        <li>
          <a
            href="#/"
            onClick={() => setFilter("completed")}
            className={`${filter === "completed" ? "selected" : ""}`}
          >
            Completed
          </a>
        </li>
      </ul>

      <button className="clear-completed" onClick={clearCompleted}>
        Clear completed
      </button>
    </footer>
  );
}

export default Contentfooter;
