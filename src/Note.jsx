import React from 'react';

function Note(props) {
  
  return (<div className="note">
  <h4>{props.head}</h4>
  <p>{props.body}</p>
  <button id={props.id} onClick={props.onClick}>DELETE</button>
    <button id={props.id} onClick={props.onEdit}>EDIT</button>
  </div>);
}

export default Note;