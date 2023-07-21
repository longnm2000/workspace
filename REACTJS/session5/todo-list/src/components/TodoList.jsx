import React from "react";

export default function TodoList({
  todoList,
  handleDelete,
  handleEdit,
  editIndex,
  editText,
  setEditText,
  handleUpdate,
  mode,
}) {
  return (
    <div className={`list-box `}>
      {todoList.map((e, i) => (
        <div key={i} className={`todo-box ${mode}`}>
          {editIndex === i ? (
            <div>
              <input
                className="update-inp"
                type="text"
                name=""
                id=""
                value={editText}
                onChange={(e) => setEditText(e.target.value)}
              />

              <button className="update-btn" onClick={handleUpdate}>
                Update
              </button>
            </div>
          ) : (
            <div>
              <p className="todo-info">{e}</p>
              <button className="edit-btn" onClick={() => handleEdit(i)}>
                Edit
              </button>
              <button
                className="delete-btn"
                onClick={() => handleDelete(todoList, i)}
              >
                <i className="fa-solid fa-trash"></i>
              </button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
