import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

function SignInPage() {
  const navigate = useNavigate();
  const [account, setAccount] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setAccount({ ...account, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8000/api/v1/auth/login", account)
      .then((res) => {
        if (res.data.access_token) {
          Swal.fire({
            icon: "success",
            title: "Đăng nhập thành công!",
            text: "Chào mừng bạn đã đăng nhập!",
            confirmButtonText: "OK",
            timer: 1000,
          });
          localStorage.setItem("access_token", res.data.access_token);
          navigate("/");
        } else {
          Swal.fire({
            icon: "error",
            title: "Đăng nhập không thành công",

            confirmButtonText: "OK",
            timer: 1000,
          });
        }
      })
      .catch((error) => console.log(error));
  };
  return (
    <div className="container mt-5">
      <h1>Sign In</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="text"
            className="form-control"
            name="email"
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            name="password"
            onChange={handleChange}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

export default SignInPage;
