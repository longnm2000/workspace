import React, { useState } from "react";

export default function TaskList() {
  const [task, setTask] = useState([]);
  const [newTask, setNewTask] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    setTask([...task, newTask]);
    setNewTask("");
  };
  return (
    <div>
      <ul>
        {task.map((e, i) => (
          <li key={i}>{e}</li>
        ))}
      </ul>
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          name=""
          id=""
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button>Add</button>
      </form>
    </div>
  );
}
