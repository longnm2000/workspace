import React, { useRef, useState } from "react";

export default function CountTime() {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const counter = useRef();
  const handleStart = () => {
    setIsRunning(true);
    counter.current = setInterval(() => {
      setTime((prev) => prev + 1);
    }, 1000);
  };
  const handleStop = () => {
    setIsRunning(false);
    clearInterval(counter.current);
  };
  return (
    <div>
      <p>Đếm thời gian {time}</p>
      <button onClick={handleStart} disabled={isRunning}>
        Start
      </button>
      <button onClick={handleStop} disabled={!isRunning}>
        Stop
      </button>
    </div>
  );
}
