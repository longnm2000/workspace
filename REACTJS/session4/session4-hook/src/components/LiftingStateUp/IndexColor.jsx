import React, { useState } from "react";
import ColorPicker from "./ColorPicker";

export default function IndexColor() {
  /**
   * Lifting state up là nâng (chuyển) trạng thái lên
   */
  const [color, setColor] = useState("#000000");
  const handleChangeColor = (e) => {
    setColor(e);
  };
  return (
    <div>
      <h2>Lifting State Up</h2>
      {/* Cách 1 */}
      {/* <ColorPicker changeColor={handleChangeColor} /> */}
      {/* Cách 2 */}
      <ColorPicker setColorParent={setColor} colorParent={color} />
      <div
        style={{
          background: color,
          width: "200px",
          height: "200px",
          margin: "0 auto",
          marginTop: "100px",
        }}
      ></div>
    </div>
  );
}
