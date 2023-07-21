import axios from "axios";
import React, { useState } from "react";
import Button from "react-bootstrap/esm/Button";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
import "./AddUser.css";

export default function AddUser() {
  const [data, setData] = useState({
    name: "",
    phone: "",
    email: "",
    age: "",
    address: "",
  });
  const { name, phone, email, age, address } = data;
  const handleChangeInput = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:8000/users", data);
    navigate("/", 1000);
  };
  return (
    <div className="mx-auto shadow p-5 w-75">
      <i
        class="fa-solid fa-arrow-left fa-2xl back-icon"
        onClick={() => navigate(-1)}
      ></i>
      <h2>Add User</h2>
      <form action="" onSubmit={handleSubmit}>
        <Form.Group htmlFor="">Name:</Form.Group>
        <Form.Control
          type="text"
          name="name"
          id=""
          value={name}
          onChange={handleChangeInput}
        />
        <br />
        <Form.Group htmlFor="">Phone:</Form.Group>
        <Form.Control
          type="text"
          name="phone"
          id=""
          value={phone}
          onChange={handleChangeInput}
        />
        <br />
        <Form.Group htmlFor="">Email:</Form.Group>
        <Form.Control
          type="text"
          name="email"
          id=""
          value={email}
          onChange={handleChangeInput}
        />
        <br />
        <Form.Group htmlFor="">Age:</Form.Group>
        <Form.Control
          type="text"
          name="age"
          id=""
          value={age}
          onChange={handleChangeInput}
        />
        <br />
        <Form.Group htmlFor="">Address:</Form.Group>
        <Form.Control
          type="text"
          name="address"
          id=""
          value={address}
          onChange={handleChangeInput}
        />
        <br />
        <Button variant="primary" type="submit">
          Add
        </Button>
      </form>
    </div>
  );
}
