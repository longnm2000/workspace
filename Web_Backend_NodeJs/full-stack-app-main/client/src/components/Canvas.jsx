import React, { useEffect, useState } from "react";

function Canvas({ currentView, handleUpdate }) {
  let [value, setValue] = useState({
    name: "",
    birthday: "",
    sex: "",
    place: "",
    address: "",
  });
  useEffect(()=>{
    setValue(prev=>({}))
  })

  return (
    <>
      <div
        className="offcanvas offcanvas-start"
        data-bs-backdrop="static"
        tabIndex={-1}
        id="staticBackdrop"
        aria-labelledby="staticBackdropLabel"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="staticBackdropLabel">
            Offcanvas
          </h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          />
        </div>
        <div className="offcanvas-body">
          <form onSubmit={handleUpdate}>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Email
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                name="email"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="InputName" className="form-label">
                Name
              </label>
              <input
                type="text"
                className="form-control"
                id="InputName"
                aria-describedby="emailHelp"
                name="name"
                onChange={(e) =>
                  setValue((prev) => ({ ...prev, name: e.target.value }))
                }
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputBirthday" className="form-label">
                Birthday
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleInputBirthday"
                aria-describedby="emailHelp"
                name="birthday"
                onChange={(e) =>
                  setValue((prev) => ({ ...prev, birthday: e.target.value }))
                }
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputGender" className="form-label">
                Gender
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleInputGender"
                aria-describedby="emailHelp"
                defaultValue={currentView.sex === 1 ? "Male" : "Female"}
                name="sex"
                onChange={(e) =>
                  setValue((prev) => ({ ...prev, sex: e.target.value }))
                }
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPlace" className="form-label">
                Place
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleInputPlace"
                aria-describedby="emailHelp"
                value={currentView.place}
                name="place"
                onChange={(e) =>
                  setValue((prev) => ({ ...prev, place: e.target.value }))
                }
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputAddress" className="form-label">
                Address
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleInputAddress"
                aria-describedby="emailHelp"
                value={currentView.address}
                name="address"
                onChange={(e) =>
                  setValue((prev) => ({ ...prev, address: e.target.value }))
                }
              />
            </div>

            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Canvas;
