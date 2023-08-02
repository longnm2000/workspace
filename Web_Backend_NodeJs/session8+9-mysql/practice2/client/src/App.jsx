import "./App.css";
import { Route, Routes } from "react-router-dom";
import UserComponent from "./components/UserComponent";
import AddComponent from "./components/AddComponent";

function App() {
  return (
    <>
      <Routes>
        <Route path="/users" element={<UserComponent />}></Route>
        <Route path="/users/add" element={<AddComponent />}></Route>
      </Routes>
    </>
  );
}

export default App;
