import React, { useState } from "react";

export default function TodoList() {
  const [list, setList] = useState([]);
  const [newTodo, setNewTodo] = useState("");
  const [editIndex, setEditIndex] = useState(null);
  const [value, setValue] = useState("");

  const handleAdd = () => {
    if (newTodo.trim() !== "") {
      setList([...list, newTodo]);
      setNewTodo("");
    }
  };
  const handleDelete = (index) => {
    const updatedTodos = list.filter((e, i) => i !== index);
    setList(updatedTodos);
  };

  const handleEdit = (index, todo) => {
    setEditIndex(index);
    setValue(todo);
  };

  const handleUpdateChange = (e) => {
    setValue(e);
  };

  const handleSave = (index, updatedTodo) => {
    const updatedTodos = [...list];
    updatedTodos[index] = updatedTodo;
    setList(updatedTodos);
    setEditIndex(null);
    setValue("");
  };

  return (
    <div>
      <p>TodoList</p>
      <input
        type="text"
        name=""
        id=""
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      />
      <button onClick={handleAdd}>Add</button>
      <ul>
        {list.map((todo, index) => (
          <li key={index}>
            {editIndex === index ? (
              <div>
                <input
                  type="text"
                  value={value}
                  onChange={(e) => handleUpdateChange(e.target.value)}
                />
                <button
                  onClick={() => {
                    handleSave(index, value);
                  }}
                >
                  Update
                </button>
              </div>
            ) : (
              <>
                {todo}
                <button onClick={() => handleEdit(index, todo)}>Edit</button>
                <button onClick={() => handleDelete(index)}>Delete</button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
