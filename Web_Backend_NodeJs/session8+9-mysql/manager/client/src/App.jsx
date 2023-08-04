import { Route, Routes } from "react-router-dom";
import "./App.css";

import ManagerUser from "./assets/components/ManagerUser";
import ManagerBlog from "./assets/components/ManagerBlog";
import Home from "./assets/components/Home";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/blog" element={<ManagerBlog />}></Route>
        <Route path="/user" element={<ManagerUser />}></Route>
      </Routes>
    </>
  );
}

export default App;
