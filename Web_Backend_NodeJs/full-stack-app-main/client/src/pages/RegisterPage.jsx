import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { showMessage } from "../helper";

function RegisterPage() {
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  const baseURL = "http://localhost:3000/api/v1";
  const navigate = useNavigate();
  const handleRegister = async (e) => {
    e.preventDefault();
    let user = { email, password };
    try {
      let res = await fetch(`${baseURL}/auth/signup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });
      let data = await res.json();
      console.log(data);
      if (data.error) {
        if (data.error.code === "ER_DUP_ENTRY") {
          showMessage("error", "Email already in use");
        } else {
          showMessage("error", data.error.message);
        }
      } else {
        showMessage("success", data.message);
        navigate("/login");
      }
    } catch (error) {
      showMessage("error", error.message);
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
          <form onSubmit={handleRegister}>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                aria-describedby="emailHelp"
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
                Already have an account! <Link to={"/login"}>Sign in here</Link>
              </div>
            </div>
            <button type="submit" className="btn btn-primary">
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default RegisterPage;
