import React, { useState } from "react";
import TodoList from "./TodoList";

export default function TodoInput() {
  const [newTodo, setNewTodo] = useState("");
  const [list, setList] = useState([]);
  const [editIndex, setEditIndex] = useState(-1);
  const [editText, setEditText] = useState("");
  const [mode, setMode] = useState("light");

  const handleAdd = () => {
    if (newTodo.trim() !== "") {
      setList([...list, newTodo]);
      setNewTodo("");
    }
  };
  const handleDelete = (list, index) => {
    const deletedList = list.filter((element, i) => i !== index);
    setList(deletedList);
  };
  const handleEdit = (index) => {
    setEditIndex(index);
    setEditText(list[index]);
    console.log("tata ", index);
  };

  const handleUpdate = () => {
    const updatedList = [...list];
    updatedList[editIndex] = editText;
    setList(updatedList);
    setEditIndex(-1);
    setEditText("");
  };

  const toggleMode = () => {
    setMode(mode === "light" ? "dark" : "light");
  };

  return (
    <div>
      <button className="mode-btn" onClick={toggleMode}>
        Mode
      </button>
      <div className={`input-box ${mode}`}>
        <p>Title</p>
        <input
          type="text"
          name=""
          id=""
          placeholder="Take a note..."
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
        <button onClick={handleAdd}>+</button>
      </div>
      <TodoList
        todoList={list}
        handleDelete={handleDelete}
        handleEdit={handleEdit}
        editIndex={editIndex}
        editText={editText}
        setEditText={setEditText}
        handleUpdate={handleUpdate}
        mode={mode}
      />
    </div>
  );
}
