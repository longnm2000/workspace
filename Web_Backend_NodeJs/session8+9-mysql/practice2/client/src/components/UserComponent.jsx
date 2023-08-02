import axios from "axios";
import { useEffect, useState } from "react";
import { Button, Container } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import Modal from "react-bootstrap/Modal";
import { useNavigate } from "react-router-dom";

function UserComponent() {
  const navigate = useNavigate();
  const [data, setData] = useState(null);
  const [detailUser, setDetailUser] = useState(null);
  const fetchData = async () => {
    await axios
      .get("http://localhost:8000/api/v1/users")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    fetchData();
  }, []);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = (e) => {
    setShow(true);
    setDetailUser(e);
  };

  const handleDeleteUser = (id) => {
    axios
      .delete(`http://localhost:8000/api/v1/users/${id}`)
      .then((response) => {
        console.log(response.data);
        fetchData();
      })
      .catch((error) => console.log(error));
  };
  return (
    <Container>
      <div className="d-flex align-items-center justify-content-between mb-3 mt-5">
        <h1>Users Panel</h1>
        <Button onClick={() => navigate("/users/add")}>Add User</Button>
      </div>
      <Table striped bordered hover variant="dark" className="text-center">
        <thead>
          <tr>
            <th>#</th>
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Website</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((e, i) => (
            <tr key={i}>
              <td>{i + 1}</td>
              <td>{e.user_id}</td>
              <td>{e.name}</td>
              <td>{e.email}</td>
              <td>{e.phone}</td>
              <td>{e.website}</td>
              <td className="d-flex gap-2 justify-content-center">
                <Button variant="primary" onClick={() => handleShow(e)}>
                  Detail
                </Button>
                <Button variant="warning">Update</Button>
                <Button
                  variant="danger"
                  onClick={() => handleDeleteUser(e.user_id)}
                >
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>User Detail</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Id: {detailUser?.user_id}</p>
          <p>Name: {detailUser?.name}</p>
          <p>Email: {detailUser?.email}</p>
          <p>Phone: {detailUser?.phone}</p>
          <p>Website: {detailUser?.website}</p>
        </Modal.Body>
      </Modal>
    </Container>
  );
}

export default UserComponent;
