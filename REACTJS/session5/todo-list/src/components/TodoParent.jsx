import React from "react";
import "./TodoParent.css";
import TodoInput from "./TodoInput";

export default function TodoParent() {
  return (
    <div>
      <header>
        <h2>Note App</h2>
      </header>
      <div>
        <TodoInput />
      </div>
    </div>
  );
}
