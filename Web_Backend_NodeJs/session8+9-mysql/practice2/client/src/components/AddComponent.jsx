import axios from "axios";
import { useState } from "react";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
function AddComponent() {
  const navigate = useNavigate();
  const [validated, setValidated] = useState(false);
  const [inputInfo, setInputInfo] = useState({
    name: "",
    email: "",
    phone: "",
    website: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.stopPropagation();
    }
    setValidated(true);
    // axios
    //   .post("http://localhost:8000/api/v1/users", inputInfo)
    //   .then((response) => {
    //     console.log(response.data);
    //     navigate("/users");
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
  };
  const handleRegisterInfo = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setInputInfo({ ...inputInfo, [name]: value });
  };
  console.log(inputInfo);

  return (
    <Container>
      <h1 className="my-4">Add User</h1>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            placeholder="Enter name"
            required
            onChange={handleRegisterInfo}
          />
          <Form.Control.Feedback type="invalid">
            Không để trống
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter address"
            name="email"
            required
            pattern="[a-z0-9]+@[a-z]+\.[a-z]{2,3}"
            onChange={handleRegisterInfo}
          />
          <Form.Control.Feedback type="invalid">
            Email không hợp lệ
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Phone</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter phone"
            name="phone"
            pattern="^\d{10,20}$"
            required
            onChange={handleRegisterInfo}
          />
          <Form.Control.Feedback type="invalid">
            Số điện thoại không hợp lệ
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Website</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter website"
            name="website"
            required
            onChange={handleRegisterInfo}
          />
          <Form.Control.Feedback type="invalid">
            Không để trống
          </Form.Control.Feedback>
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
}

export default AddComponent;
