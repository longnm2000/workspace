import React, { useRef, useState } from "react";

export default function DemoUseRef() {
  /**
   * useRef là 1 hook dùng để lưu giá trị tham chiếu ra vên ngoài function
   * useRef sẽ trả về 1 đối tượng có key là current
   */
  const [time, setTime] = useState(60);
  let timer = useRef();

  const handleStart = () => {
    timer.current = setInterval(() => {
      setTime((prevState) => prevState - 1);
    }, 1000);
  };
  const handleStop = () => {
    clearInterval(timer.current);
  };

  return (
    <div>
      <h2>Demo useRef</h2>
      <p>{time}</p>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
    </div>
  );
}
