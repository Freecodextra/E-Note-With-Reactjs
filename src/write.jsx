import React from "react";
import Input from "./input.jsx";

function Write(props) {
  
  return <center><div className="write">
  <Input 
  name="head" 
  id="head" 
  placeholder="Note heading"
  type="text"
  onChange={props.onChange}
  value={props.value1}
  />
  <Input 
  name="body" 
  id="body" 
  placeholder="Note content" 
  type="text"
  onChange={props.onChange}
  value={props.value2}
  />
  <button className="add-btn" onClick={props.onClick}>Add</button>
  </div></center>
}

export default Write;