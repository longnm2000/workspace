import React from "react";
import axios from "axios";

export default function DemoAxios() {
  /**
   *
   */
  const handleAxiosGet = () => {
    axios
      .get("http://localhost:8000/users")
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  };
  const handleAxiosPost = () => {
    axios
      .post("http://localhost:8000/users", {
        name: "long",
        email: "long@gmail.com",
      })
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  };
  const handleAxiosPut = () => {
    axios
      .put("http://localhost:8000/users/7", {
        name: "ryu",
        email: "ryu@gmail.com",
      })
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  };
  const handleAxiosPatch = () => {
    axios
      .patch("http://localhost:8000/users/7", {
        name: "dragon",
        email: "ryu@gmail.com",
      })
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  };
  const handleAxiosDelete = () => {
    axios
      .delete("http://localhost:8000/users/7")
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <h2>Demo Axios</h2>
      <button onClick={handleAxiosGet}>Get Axios</button>
      <button onClick={handleAxiosPost}>Post Axios</button>
      <button onClick={handleAxiosPut}>Put Axios</button>
      <button onClick={handleAxiosPatch}>Put Axios</button>
      <button onClick={handleAxiosDelete}>Delete Axios</button>
    </div>
  );
}
