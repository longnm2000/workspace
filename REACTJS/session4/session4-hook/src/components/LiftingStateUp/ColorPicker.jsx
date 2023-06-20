import React from "react";

export default function ColorPicker(props) {
  //Cách 1:
  //   const handleColor = (e) => {
  //     console.log(props);
  //     props.changeColor(e.target.value);
  //   };
  // Cách 2:
  const handleColor = (e) => {
    props.setColorParent(e.target.value);
  };
  return (
    <div>
      <input type="color" name="" id="" onChange={handleColor} />
    </div>
  );
}
