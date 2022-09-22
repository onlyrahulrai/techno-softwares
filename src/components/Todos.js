import React from "react";
import { ImCross } from "react-icons/im";
import useTodoContext from "../context/useTodoContext";

const Todos = () => {
  const { todos, updateTodo, deleteTodo } = useTodoContext();

  return (
    <div className="d-flex justify-content-center align-items-center flex-column">
      {todos.map((todo, index) => {
        const { id, name, completed } = todo;
        return (
          <div
            className="d-flex w-60 d-flex align-items-center justify-content-between"
            key={index}
          >
            <input
              type="checkbox"
              onChange={() => updateTodo(id)}
              checked={completed}
            />
            <span className={completed ? `line-through` : ""}>{name}</span>

            <ImCross
              role="button"
              onClick={() => deleteTodo(id)}
              className="cursor-pointer"
            />
          </div>
        );
      })}
    </div>
  );
};

export default Todos;
