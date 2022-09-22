import React, { useState } from "react";
import useTodoContext from "../context/useTodoContext";
import { Container, Form, Button, Card } from "react-bootstrap";
import Todos from "./Todos";
import {v4 as uuidV4} from "uuid";

const initialState = {name:""}

const Todo = () => {
  const [todo,setTodo] = useState(initialState);
  const { todos,createTodo,totalCompletedTodos } = useTodoContext();
  
  const onChange = (e) => {
    setTodo((prevState) => ({...prevState,[e.target.name]:e.target.value}))
  }

  const onSubmit = (e) => {
    e.preventDefault()
    if(!todo.name) return

    createTodo({id:uuidV4(),name:todo.name,completed:false})

    setTodo(initialState)
  }

  return (
    <Container className="d-flex justify-content-center align-items-center min-h-100">
      <div className="w-100 text-center">
        <h4>THINGS TO DO:</h4>
        <hr />
        {todos.length > 0 ? (
          <Todos />
        ) : (
          <p className="text-secondary">Looks like you're absolutely free today!</p>
        )}

        <hr />
        <h4>DONE: {totalCompletedTodos.length ? totalCompletedTodos.length : " "}</h4>
        <Form className="text-center d-flex align-items-center justify-content-center mt-3" onSubmit={onSubmit}>
          <div className="d-flex justify-content-between w-60">
            <Form.Control placeholder="Enter new task" className="w-75" value={todo.name} name="name" onChange={onChange} />
            <Button type="submit" variants="primary" className="ml-3" >
              ADD TASK
            </Button>
          </div>
        </Form>
      </div>
    </Container>
  );
};

export default Todo;
