import React, { useRef, useReducer, useEffect } from "react";
import todoReducer from "../../../reducers/todoReducer";

const Todos = () => {
  const todoInputRef = useRef(""); // creating a ref for the input field to capture the entered input in a fn comp

  const [todoList, todoListDispatch] = useReducer(todoReducer);
  console.log(todoList);
  console.log(todoListDispatch); // unexec'd dispatcher fn

  useEffect(() => {
    console.log('After initial rendering');
    //TODO: connect with the backend -- fetch todos from rest api 
    
    // dispatch with the fetched data as payload
    todoListDispatch({
      type: 'GET_TODOS',
      payload: [{
        id: 1, 
        title: 'sample todo',
        completed: true
      }]
    });
  }, [])
  
  const handleAddTodo = () => {
    console.log(todoInputRef.current.value);
    // send the todo to rest api /
    // upon successful saving, then dispatch
    // let's dispatch an action
    todoListDispatch({
      type: "ADD_TODO",
      payload: {
        id: new Date(),
        title: todoInputRef.current.value,
        completed: false
      }
    }); // whenever we dispatch
  };

  return (
    <div>
      <h3>Todos</h3>
      <input type="text" ref={todoInputRef} />
      <button type="button" className="btn btn-success" onClick={handleAddTodo}>
        Add Todo
      </button>

      <ul>
        {todoList?.map((todo) => {
          return <li key={todo.id}>{todo.title}</li>;
        })}
      </ul>
    </div>
  );
};

export default Todos;
