import React, { useState } from "react";

export default function Todo() {
  const [todo, setTodo] = useState([]);
  const [text, setText] = useState("");
  const [editIndex, setEditIndex] = useState(-1);
  const [editText, setEditText] = useState("");

  const handleInputChange = (e) => {
    setText(e.target.value);
  };
  const handleAddTodo = () => {
    setTodo([...todo, { text: text, complete: false }]);
    setText("");
  };
  const handleDeleteTodo = (index) => {
    const deletedTodo = [...todo];
    deletedTodo.splice(index, 1);
    setTodo(deletedTodo);
  };

  const handleToggleTodo = (index) => {
    const toggleTodo = todo.map((e, i) =>
      index === i ? { ...e, complete: !e.complete } : e
    );
    setTodo(toggleTodo);
  };

  const handleEditTodo = (index) => {
    setEditIndex(index);
    setEditText(todo[index].text);
  };

  const handleUpdateTodo = () => {
    const updateTodo = [...todo];
    updateTodo[editIndex].text = editText;
    setTodo(updateTodo);
    setEditIndex(-1);
    setText("");
  };

  return (
    <div>
      <h2>Todo List</h2>
      <input
        type="text"
        name=""
        id=""
        value={text}
        onChange={handleInputChange}
      />
      <button onClick={handleAddTodo}>Add</button>
      <ul>
        {todo.map((element, index) => (
          <li key={index}>
            {editIndex === index ? (
              <div>
                <input
                  type="text"
                  name=""
                  id=""
                  onChange={(e) => setEditText(e.target.value)}
                  value={editText}
                />
                <button onClick={() => handleUpdateTodo()}>Edit Todo</button>
              </div>
            ) : (
              <div>
                <span
                  onClick={() => handleToggleTodo(index)}
                  style={{
                    textDecoration: element.complete ? "line-through" : "none",
                  }}
                >
                  {element.text}
                </span>

                <button onClick={() => handleEditTodo(index)}>Edit</button>
                <button onClick={() => handleDeleteTodo(index)}>Delete</button>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
