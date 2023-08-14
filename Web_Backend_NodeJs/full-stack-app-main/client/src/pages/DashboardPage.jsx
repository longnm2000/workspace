import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import Canvas from "../components/Canvas";

function DashboardPage() {
  let [architect, setArchitect] = useState([]);
  let token = localStorage.getItem("access_token");
  let baseURL = "http://localhost:3000/api/v1";
  let [currentView, setCurrentView] = useState([]);
  useEffect(() => {
    if (token) {
      fetch(baseURL + "/users", {
        headers: {
          Authorization: "Bearer " + token,
        },
      })
        .then((res) => res.json())
        .then((data) => setArchitect((prev) => [...prev, ...data.users]))
        .catch((error) => console.log(error));
    }
  }, []);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(baseURL + `/users/${id}`, {
          method: "DELETE",
          headers: {
            Authorization: "Bearer " + token,
          },
        })
          .then((res) => res.json())
          .then((data) => console.log(data))
          .then(() => {
            setArchitect((prev) => {
              let architectsClone = [...prev];
              let findIndex = architectsClone.findIndex((e) => e.id === id);
              architectsClone.splice(findIndex, 1);
              return [...architectsClone];
            });
          })
          .catch((err) => console.log(err));
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
      }
    });
  };

  const handleView = (e) => {
    setCurrentView(e);
  };

  const handleUpdate = (e, currentView) => {
    e.preventDefault();
    console.log(currentView);
    let updateUser = {
      name: e.target.name.value,
      birthday: e.target.birthday.value,
      sex: e.target.sex.value,
      place: e.target.place.value,
      address: e.target.address.value,
    };
    console.log(updateUser);
    fetch(baseURL + "/users/" + currentView.id, {
      method: "PATCH",
    });
  };
  return (
    <div className="container">
      <div className="row">
        <h1>Architect Dashboard</h1>
      </div>
      <div className="row mt-3">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Id</th>
              <th scope="col">Name</th>
              <th scope="col">Birthday</th>
              <th className="col">Gender</th>
              <th className="col">Place</th>
              <th className="col">Address</th>
              <th className="col">email</th>

              <th className="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {architect?.map((e, i) => (
              <tr key={i}>
                <td>{i + 1}</td>
                <td>{e.id}</td>
                <td>{e.name}</td>
                <td>{e.birthday}</td>
                <td>{e.sex}</td>
                <td>{e.place}</td>
                <td>{e.address}</td>
                <td>{e.email}</td>

                <td>
                  <button
                    className="btn btn-info"
                    data-bs-toggle="offcanvas"
                    data-bs-target="#staticBackdrop"
                    aria-controls="staticBackdrop"
                    onClick={() => handleView(e)}
                  >
                    View
                  </button>
                  <button
                    className="btn btn-danger"
                    onClick={() => handleDelete(e.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Canvas
        currentView={currentView}
        handleUpdate={(e) => handleUpdate(e, currentView)}
      />
    </div>
  );
}

export default DashboardPage;
