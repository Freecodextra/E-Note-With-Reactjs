import React from 'react';
import Header from "./Header.jsx";
import Note from "./Note.jsx";
import Footer from "./Footer.jsx";
import notes from "./notes.js";
import Write from "./write.jsx";


function App() {
 
 const [text, setText] = React.useState({head: "", body: ""});
 const onEditable = React.useRef(-1);
  function handleChange(e) {
    const {name, value}= e.target;
    if (name === "head") {
      setText(prev => {
        return {
          head: value,
          body: prev.body
        }
      })
    } else if (name === "body") {
      setText(prev => {
        return {
          head: prev.head,
          body: value
        }
      })
    }
  }
  
  
  const [items, setItems] = React.useState([]);
 

  function handleClick() {
    if (onEditable.current !== -1) {
      items.map((item, idx) => {
        if (onEditable.current === idx) {
          item.head = text.head;
          item.body = text.body;
        }
      })
      setItems([...items]);
      onEditable.current = -1;
    } else {
      setItems(prev => {
      return [...prev, text]
    })
    }
    setText({head: "", body: "" })
  }
  function handleDelete(e) {
    const itemId = e.target.id;
   const newArr = items.filter((item, index) => {
     return itemId != index;
   })
   setItems(newArr);
  }
  function handleNoteEdit(e) {
    const itemId = Number(e.target.id);
    const {head: itemHead, body: itemBody} = items[itemId];
    setText({head: itemHead, body: itemBody});
    onEditable.current = itemId;
  }
  function mapNotes(item, index) {
  return <Note 
  key={index}
  id={index}
  head={item.head}
  body={item.body}
  onClick={handleDelete}
  onEdit={handleNoteEdit}
  />
}
  return (
    <div>
    <Header />
    <Write 
      onClick={handleClick}
      onChange={handleChange}
      value1={text.head}
      value2={text.body}
    />
    {items.map(mapNotes)}
    <Footer />
    </div>
  );
}

export default App;
