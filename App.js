import './App.css';
import { useState, useEffect } from "react";
// import { useFormik } from "formik";
// import { Button, Container } from "react-bootstrap";
// import axios from "axios";


function App() {
  const [todolist, setTodolist] = useState([]);
  const [value, setValue] = useState("");
  const [editValue, setEditValue] = useState("");
  const [editIndex, setEditIndex] = useState(-1);

  function addList(e) {
    e.preventDefault();
    if (!value) return;
    const newtodolist = [...todolist];
    if (editIndex === -1) {
      newtodolist.push({ text: value });
    } else {
      newtodolist[editIndex].text = value;
    }
    setTodolist(newtodolist);
    setValue("");
    setEditIndex(-1);
    setEditValue("");
  }

  function removeList(e) {
    var index = Number(e.target.id);
    let Delete = [...todolist];
    Delete.splice(index, 1);
    setTodolist(Delete);
    setEditIndex(-1);
    setEditValue("");
  }

  function editList(e) {
    var index = Number(e.target.id);
    setEditIndex(index);
    setEditValue(todolist[index].text);
    setValue(todolist[index].text);
  }

  function handleEdit(e) {
    e.preventDefault();
    addList(e);
  }
  return(
  <><h1> Welcome to the Exam</h1><p>
      <h1> 📚ToDo List📚 </h1>
      <input
        type="text"
        className="inputname"
        placeholder="Add list"
        value={value}
        onChange={(e) => setValue(e.target.value)} />
      <button onClick={addList}>Add</button>
      {todolist.map((list, i) => (
        <div className="ToDo" key={i} id={i}>
          {list.text}
          <button
            onClick={editList}
            key={i}
            id={i}
            type="button"
            className="editbutton"
          >
            Edit
          </button>
          <button
            onClick={removeList}
            key={i}
            id={i}
            type="button"
            className="deletebutton"
          >
            Delete
          </button>

        </div>
      ))}
    </p></>
 
  )
}


export default App;