import React, { createContext, useContext, useMemo, useState } from "react";

export const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);
  const totalCompletedTodos = useMemo(() => todos.filter((todo) => todo.completed),[todos])

  const createTodo = (todo) => {
    setTodos((prevState) => ([...prevState,todo]))
  }

  const updateTodo = (id) => {
    setTodos((prevState) => prevState.map((todo) => {
      if(todo.id === id){
        return {...todo,completed:!todo.completed}
      }
      return todo;
    }))
  }

  const deleteTodo = (id) => {
    setTodos((prevState) => prevState.filter((todo) => todo.id !== id))
  }

  const value = {
    todos,
    createTodo,
    updateTodo,
    deleteTodo,
    totalCompletedTodos
  };
  return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>;
};

const useTodoContext = () => useContext(TodoContext);

export default useTodoContext;
