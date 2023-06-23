import React, { createContext, useState } from "react";
import CompB from "./CompB";
import "./ParentContext.css";

export const themeContext = createContext();

export default function ParentContext() {
  /**
   * useContext là 1 hook cung cấp Contect để giúp đơn giản hóa việc chia sẻ dữ liệu trong cây dom
   * mà không cần phải truyền từng cấp
   *
   * TH1: Truyền props bình thường
   * ParentContext => CompB => CompC
   */
  const [theme, setTheme] = useState("light");
  const handleChangeTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  return (
    <div>
      <h2>Demo useContext</h2>
      {/* <button onClick={handleChangeTheme}>Change theme</button>
      <CompB theme={theme} /> */}
      <themeContext.Provider value={theme}>
        <button onClick={handleChangeTheme}>Change theme</button>
        <CompB />
      </themeContext.Provider>
    </div>
  );
}
