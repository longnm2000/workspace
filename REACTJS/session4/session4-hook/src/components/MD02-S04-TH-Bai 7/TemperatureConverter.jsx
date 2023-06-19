import React, { useState } from "react";

export default function TemperatureConverter() {
  const [celsius, setCelsius] = useState("");
  const [fahrenheit, setFahrenheit] = useState("");

  const handleCelsiusChange = (e) => {
    setCelsius(e.target.value);
    setFahrenheit(e.target.value * 1.8 + 32);
  };
  const handleFahrenheitChange = (e) => {
    setFahrenheit(e.target.value);
    setCelsius((e.target.value - 32) / 1.8);
  };
  return (
    <div>
      <div>
        <label htmlFor="">Celsius:</label>
        <input
          type="text"
          name=""
          id=""
          value={celsius}
          onChange={handleCelsiusChange}
        />
      </div>
      <div>
        <label htmlFor="">Celsius:</label>
        <input
          type="text"
          name=""
          id=""
          value={fahrenheit}
          onChange={handleFahrenheitChange}
        />
      </div>
    </div>
  );
}
