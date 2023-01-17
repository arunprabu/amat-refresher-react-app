import React, { useRef, useState, useReducer } from 'react'

const Todos = () => {
  const [todoList, setTodoList ] = useState([]); // will demo using useReducer tomorrow
  const todoInputRef = useRef(''); // creating a ref for the input field to capture the entered input in a fn comp

  const handleAddTodo = () => {
    // updating state immutably
    console.log(todoInputRef.current.value);
    const dupTodoList = [...todoList, todoInputRef.current.value];
    setTodoList(dupTodoList);
  }

  return (
    <div>
      <h3>Todos</h3>
      <input type="text" ref={todoInputRef}/>
      <button type="button" className="btn btn-success" onClick={handleAddTodo}>
        Add Todo
      </button>

      <ul>
        {todoList?.map((todo, index) => {
          return <li key={index}>{todo}</li>;
        })}
      </ul>
    </div>
  );
}

export default Todos