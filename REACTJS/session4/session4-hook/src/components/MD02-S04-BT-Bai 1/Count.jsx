import React, { useState } from "react";

export default function Count() {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <p>Bạn đã click {count} lần</p>
      <button onClick={handleClick}>Click</button>
    </div>
  );
}
