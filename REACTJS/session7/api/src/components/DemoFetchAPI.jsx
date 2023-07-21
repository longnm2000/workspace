import React, { useState, useEffect } from "react";

export default function DemoFetchAPI() {
  const [dataUsers, setDataUsers] = useState([]);
  const handleGetFetchAPI = () => {
    fetch("http://localhost:8000/users")
      .then((res) => res.json()) //Ép kiểu json
      .then((data) => setDataUsers(data)) //Lấy dữ liệu về
      .catch((err) => console.log(err));
  };
  const handlePostFetchAPI = () => {
    fetch("http://localhost:8000/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        id: 6,
        name: "Yua Mikami",
        email: "yua@gmail.com",
      }),
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  };

  // PUT tạo ra bản ghi mới ghi đè bản ghi cũ
  const handlePutFetchAPI = () => {
    fetch("http://localhost:8000/users/5", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        email: "hanato@gmail.com",
      }),
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  };

  // PUT và PATCH đều được sử dụng để update nhưng: PUT tạo ra bản ghi mới còn PATCH sẽ không tọa ra
  // bản ghi mới vẫn ghi nguyên các giá trị trong bản ghi cũ nếu không được cập nhật
  const handlePatchFetchAPI = () => {
    fetch("http://localhost:8000/users/5", {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        email: "yuihanato@gmail.com",
      }),
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  };

  const handleDeleteFetchAPI = () => {
    fetch("http://localhost:8000/users/4", {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  };

  /**
   * Demo sử dụng fetch với useEffect
   */
  //   useEffect(() => {
  //     fetch("http://localhost:8000/users")
  //       .then((res) => res.json()) //Ép kiểu json
  //       .then((data) => setDataUsers(data)) //Lấy dữ liệu về
  //       .catch((err) => console.log(err));
  //   }, []);

  return (
    <div>
      <h2>Demo Fetch API</h2>
      <button onClick={handleGetFetchAPI}>Get Fetch API</button>
      <button onClick={handlePostFetchAPI}>Post Fetch API</button>
      <button onClick={handlePutFetchAPI}>Put Fetch API</button>
      <button onClick={handlePatchFetchAPI}>Patch Fetch API</button>
      <button onClick={handleDeleteFetchAPI}>Delete Fetch API</button>
      <table>
        <caption>Table Data Users</caption>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {dataUsers.map((user, index) => (
            <tr key={index}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
