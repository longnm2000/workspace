import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
function SignUpPage() {
  const navigate = useNavigate();
  const [account, setAccount] = useState({
    name: "",
    birthday: "",
    sex: null,
    place: "",
    address: "",
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    const { name, value, type } = e.target;
    if (type === "radio") {
      setAccount({ ...account, [name]: parseInt(value) });
    } else {
      if (name === "birthday") {
        setAccount({ ...account, [name]: parseInt(value) });
      } else {
        setAccount({ ...account, [name]: value });
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8000/api/v1/auth/signup", account)
      .then((res) => {
        Swal.fire({
          icon: "success",
          title: "Đăng ký thành công!",
          confirmButtonText: "OK",
          timer: 1000,
        });
        localStorage.setItem("access_token", res.data.access_token);
        navigate("/");
      })
      .catch((error) => console.log(error));
  };
  return (
    <div className="container mt-5">
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            type="text"
            className="form-control"
            onChange={handleChange}
            name="name"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Birthday</label>
          <input
            type="number"
            className="form-control"
            onChange={handleChange}
            name="birthday"
          />
        </div>

        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="sex"
            value={1}
            onChange={handleChange}
          />
          <label className="form-check-label" htmlFor="flexRadioDefault1">
            Male
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="sex"
            value={0}
            onChange={handleChange}
          />
          <label className="form-check-label" htmlFor="flexRadioDefault2">
            Female
          </label>
        </div>

        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Place
          </label>
          <input
            type="text"
            className="form-control"
            onChange={handleChange}
            name="place"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Address
          </label>
          <input
            type="text"
            className="form-control"
            onChange={handleChange}
            name="address"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="text"
            className="form-control"
            onChange={handleChange}
            name="email"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            onChange={handleChange}
            name="password"
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

export default SignUpPage;
