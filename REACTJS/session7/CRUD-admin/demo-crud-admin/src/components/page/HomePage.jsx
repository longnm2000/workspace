import React, { useEffect, useState } from "react";
import LayoutNavbar from "../layout/LayoutNavbar";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import axios from "axios";
import { Link } from "react-router-dom";
import Modal from "react-bootstrap/Modal";

export default function HomePage() {
  const [data, setData] = useState([]);
  const [show, setShow] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  const handleClose = () => setShow(false);
  const handleShow = (user) => {
    setSelectedUser(user);
    setShow(true);
  };

  const loadUser = () => {
    axios
      .get("http://localhost:8000/users")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    loadUser();
  }, []);

  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:8000/users/${id}`)
      .then((res) => {
        console.log(res.data);
        setData((prevData) => prevData.filter((user) => user.id !== id));
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <LayoutNavbar />
      <h2 style={{ textAlign: "center", marginTop: "50px" }}>
        Đây là Home Page
      </h2>
      <Table
        striped
        bordered
        hover
        variant="light"
        style={{ textAlign: "center" }}
      >
        <thead>
          <tr>
            <th>STT</th>
            <th>ID</th>
            <th>Name</th>
            <th>Phone</th>
            <th>Email</th>
            <th>Age</th>
            <th>Address</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((element, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{element.id}</td>
              <td>{element.name}</td>
              <td>{element.phone}</td>
              <td>{element.email}</td>
              <td>{element.age}</td>
              <td>{element.address}</td>
              <td
                style={{
                  display: "flex",
                  gap: "10px",
                  justifyContent: "center",
                }}
              >
                <Link to={`/user/edit/${element.id}`}>
                  <Button variant="warning">Edit</Button>
                </Link>

                <Button
                  variant="danger"
                  onClick={() => handleDelete(element.id)}
                >
                  Delete
                </Button>
                <Button variant="info" onClick={() => handleShow(element)}>
                  View
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Detail</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {!!selectedUser ? (
              <div>
                <p>ID: {selectedUser.id}</p>
                <p>Name: {selectedUser.name}</p>
                <p>Phone: {selectedUser.phone}</p>
                <p>Email: {selectedUser.email}</p>
                <p>Age: {selectedUser.age}</p>
                <p>Address: {selectedUser.address}</p>
              </div>
            ) : (
              <></>
            )}
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    </div>
  );
}
