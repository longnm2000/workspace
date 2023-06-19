import React, { useState } from "react";

export default function CountText() {
  const [text, setText] = useState("");
  return (
    <div>
      <input
        type="text"
        name=""
        id=""
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <p>Số ký tự là {text.length}</p>
    </div>
  );
}
