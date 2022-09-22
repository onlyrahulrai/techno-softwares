import React, { useState } from "react";
import useTodoContext from "../context/useTodoContext";
import { Container, Form, Button } from "react-bootstrap";
import {Todos} from "../components";
import {v4 as uuidV4} from "uuid";


const Todo = () => {
  const [name,setName] = useState("");
  const { todos,createTodo,totalCompletedTodos } = useTodoContext();
  
  const onChange = (e) => {
    setName(e.target.value)
  }

  const onSubmit = (e) => {
    e.preventDefault()
    if(!name) return

    createTodo({id:uuidV4(),name,completed:false})

    setName("")
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
            <Form.Control placeholder="Enter new task" className="w-75" value={name} name="name" onChange={onChange} />
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
