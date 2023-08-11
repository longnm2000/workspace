import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function HomePage() {
  const navigate = useNavigate();
  const [data, setData] = useState(null);
  const instance = axios.create();
  const accessToken = localStorage.getItem("access_token");
  if (accessToken) {
    instance.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
  }
  const fetchData = () => {
    instance
      .get("http://localhost:8000/api/v1/users")
      .then((res) => {
        console.log(res.data);
        if (res.data.error?.name === "TokenExpiredError") {
          navigate("/signin");
        } else {
          setData(res.data.users);
        }
      })
      .catch((error) => console.log(error));
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="container">
      <h1 className="text-center mt-5">Users Table</h1>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Id</th>
            <th scope="col">Name</th>
            <th scope="col">Birthday</th>
            <th scope="col">Sex</th>
            <th scope="col">Place</th>
            <th scope="col">Address</th>
            <th scope="col">Email</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((e, i) => (
            <tr key={i}>
              <td>{i + 1}</td>
              <td>{e.id}</td>
              <td>{e.name}</td>
              <td>{e.birthday}</td>
              <td>{e.sex === 1 ? "Male" : "Female"}</td>
              <td>{e.place}</td>
              <td>{e.address}</td>
              <td>{e.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default HomePage;
