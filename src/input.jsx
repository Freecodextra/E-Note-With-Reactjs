import React from "react";

function Input(props) {
  return <input 
  id={props.id} 
  type={props.type} 
  placeholder={props.placeholder}
  name={props.name}
  onChange={props.onChange}
  value={props.value}
  />;
}

export default Input;