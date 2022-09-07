import React, { createContext, useContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";

const ToDoContext = createContext();

export const TodoProvider = ({ children }) => {
  const [filter,setFilter]=useState("all")
  const [todos, setToDos] = useState([
    {
      id: 1,
      text: "Learn React",
      completed: false,
    },
  ]);

  const addToDo = (text) => {
    setToDos((prev) => [
      ...prev,
      { id: uuidv4.call(), text, completed: false },
    ]);
  };
  const toggleToDo = (id) => {
    const cloned_todos = [...todos];

    const _item = cloned_todos.find((itm) => itm.id === id);
    _item.completed = !_item.completed;
    setToDos(cloned_todos);
  };
  const destroyToDo = (id) => {
    const cloned_todos = [...todos];
    const itemIndex = cloned_todos.findIndex((ind) => ind.id === id);
    cloned_todos.splice(itemIndex, 1);
    setToDos(cloned_todos);
  };
  
  const values = {
    todos,
    setToDos,
    addToDo,
    toggleToDo,
    destroyToDo,
    filter,
    setFilter
  };
  return <ToDoContext.Provider value={values}>{children}</ToDoContext.Provider>;
};

export const useToDo = () => {
  const context = useContext(ToDoContext);
  if (context === undefined) {
    throw new Error("useToDo hook must be call inside ToDoProvider component");
  }
  return context;
};
