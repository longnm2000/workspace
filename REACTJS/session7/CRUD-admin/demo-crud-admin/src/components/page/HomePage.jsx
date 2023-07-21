import React, { useEffect, useState } from "react";
import LayoutNavbar from "../layout/LayoutNavbar";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import axios from "axios";
import { Link } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import Pagination from "react-bootstrap/Pagination";

export default function HomePage() {
  const [data, setData] = useState([]);
  const [show, setShow] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  const handleClose = () => setShow(false);
  const handleShow = (user) => {
    setSelectedUser(user);
    setShow(true);
  };

  const handleDelete = async (id) => {
    await axios
      .delete(`http://localhost:8000/users/${id}`)
      .then((res) => {
        console.log(res.data);
        setData((prevData) => prevData.filter((user) => user.id !== id));
      })
      .catch((err) => console.log(err));
    //loadUser();
  };
  // const [isSearch, setIsSearch] = useState(false);
  // const [search, setSearch] = useState("");
  // const [foundUser, setFoundUser] = useState([]);

  // const handleChange = (e) => {
  //   setSearch(e.target.value);
  // };
  // const handleSubmitSearch = (e) => {
  //   e.preventDefault();
  //   const filterUsers = data.filter((user) =>
  //     Object.values(user).some((value) =>
  //       String(value).toLowerCase().includes(search.toLowerCase())
  //     )
  //   );
  //   console.log(Object.values(data[0]));
  //   setIsSearch(true);
  //   setFoundUser(filterUsers);
  // };
  // console.log(search);

  const [searchInput, setSearchInput] = useState("");

  const loadUser = async () => {
    let url = "http://localhost:8000/users";
    if (searchInput) {
      url += `?q=${searchInput}`;
    } else {
      if (sortType === "asc") {
        url += `?_sort=age&_order=asc`;
      } else {
        url += `?_sort=age&_order=desc`;
      }
    }
    const countResponse = await axios.get(
      `${url}?_page=1&_limit=1&_count=true`
    );
    console.log(countResponse);
    const totalResponse = countResponse.headers["x-total-count"];
    console.log(totalResponse);
    const totalPages = Math.ceil(totalResponse / perPage);
    let result = await axios.get(
      `${url}?_page=${totalPages}&_limit=${perPage}`
    );
    setData(result);
    setTotalPage(totalPages);
  };
  let paginationPage = [];
  for (let i = 0; i <= totalPages; i++) {}

  //Sort
  const [sortType, setSortType] = useState("asc");
  const handleSort = () => {
    setSortType(sortType === "asc" ? "desc" : "asc");
  };

  // Phân trang
  const [perPage, setPerPage] = useState(4);
  const [totalPages, setTotalPage] = useState(1);

  useEffect(() => {
    loadUser();
  }, [searchInput, sortType]);

  return (
    <div>
      <LayoutNavbar
      // search={search}
      // handleChange={handleChange}
      // handleSubmitSearch={handleSubmitSearch}
      // handleChangeSearch={handleChangeSearch}
      />
      <h2 style={{ textAlign: "center", marginTop: "50px" }}>
        Đây là Home Page
      </h2>
      <div
        // onSubmit={handleSubmitSearch}
        className="d-flex my-3 justify-content-end  "
        role="search"
      >
        <input
          className="form-control me-2 w-25 "
          type="search"
          placeholder="Search"
          aria-label="Search"
          // value={search}
          // onChange={handleChange}
          value={searchInput}
          onChange={(e) => {
            setSearchInput(e.target.value);
          }}
        />
        <button className="btn btn-outline-success" onClick={loadUser}>
          Search
        </button>
      </div>
      <Table
        striped
        bordered
        hover
        variant="light"
        style={{ textAlign: "center" }}
      >
        <thead>
          <tr>
            <th>
              STT <i className="fa-solid fa-sort"></i>
            </th>
            <th>
              ID <i className="fa-solid fa-sort"></i>
            </th>
            <th>
              Name <i className="fa-solid fa-sort"></i>
            </th>
            <th>
              Phone <i className="fa-solid fa-sort"></i>
            </th>
            <th>
              Email <i className="fa-solid fa-sort"></i>
            </th>
            <th onClick={handleSort}>
              Age<i className="fa-solid fa-sort"></i>
            </th>
            <th>
              Address <i className="fa-solid fa-sort"></i>
            </th>
            <th>Action </th>
          </tr>
        </thead>
        <tbody>
          {/* {isSearch === false ? (
            data.map((element, index) => (
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
            ))
          ) : foundUser.length !== 0 ? (
            foundUser.map((element, index) => (
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
            ))
          ) : (
            <tr>
              <td colSpan={"8"}>Không có user nào được tìm thấy</td>
            </tr>
          )} */}
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
      <div>
        <Pagination>
          <Pagination.Prev />
          <Pagination.Item>{1}</Pagination.Item>

          <Pagination.Next />
        </Pagination>
      </div>
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
