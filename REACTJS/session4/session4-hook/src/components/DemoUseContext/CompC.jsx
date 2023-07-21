import React, { useContext } from "react";
import { themeContext } from "./ParentContext";

export default function CompC() {
  const theme = useContext(themeContext);
  return (
    <div>
      <p className={theme}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum incidunt
        illum odio et, maiores facere! Iure doloremque neque nisi eum tempore!
        Sint velit ipsa, quia dolore odio voluptatem ratione deserunt.
      </p>
    </div>
  );
}
