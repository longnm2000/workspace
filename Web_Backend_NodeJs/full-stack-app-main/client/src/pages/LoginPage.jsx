import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { showMessage } from "../helper";
function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const baseURL = "http://localhost:3000/api/v1";
  const navigate = useNavigate();
  const handleLogin = async (e) => {
    e.preventDefault();
    let user = { email, password };
    try {
      let res = await fetch(`${baseURL}/auth/signin`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });
      let data = await res.json();
      if (data.access_token) {
        localStorage.setItem("access_token", data.access_token);
        showMessage("success", "login success");
        navigate("/dashboard");
      } else {
        showMessage("error", "login fail");
      }
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col-8">
          <img
            src="https://static.automotor.vn/images/upload/2022/08/28/bugatti-chay-hang-autonews.jpeg"
            alt=""
            className="w-100 rounded"
          />
        </div>
        <div className="col-4">
          <form onSubmit={handleLogin}>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Password</label>
              <input
                type="password"
                className="form-control"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="my-3">
              <div className="">
                Don't have an account!{" "}
                <Link to={"/register"}>Sign up here</Link>
              </div>
            </div>
            <button type="submit" className="btn btn-primary">
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
