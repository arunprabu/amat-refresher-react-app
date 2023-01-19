import React from 'react'

const Hello = (props) => {
  console.log("2");
  console.log(props);
  return (
    <>
      <h4>Hello, {props.name}!</h4>
      <button onClick={props.handleClick}>Click</button>
    </>
  );
}

export default Hello