import React, { useState } from "react";

export default function Form({ submitForm, actionName, handleSubmitUpdate }) {
  const [formInput, setFormInput] = useState({
    studentId: "",
    studentName: "",
    age: "",
    gender: true,
    birthDate: "",
    birthPlace: "",
    address: "",
  });

  const {
    studentId,
    studentName,
    age,
    gender,
    birthDate,
    birthPlace,
    address,
  } = formInput;

  const handleChangeInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormInput({ ...formInput, [name]: value });
  };
  const handleSubmitForm = (e) => {
    e.preventDefault();
    submitForm(formInput, false);
  };

  return (
    <div className="col-5 grid-margin">
      <div className="card">
        <div className="card-body">
          <h3 className="card-title">Thông tin sinh viên</h3>
          <form className="form-sample">
            <div className="form-group row">
              <label className="col-sm-3 col-form-label">Mã sinh viên</label>
              <div className="col-sm-9">
                <input
                  type="text"
                  className="form-control"
                  name="studentId"
                  value={studentId}
                  onChange={handleChangeInput}
                />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-3 col-form-label">Tên sinh viên</label>
              <div className="col-sm-9">
                <input
                  type="text"
                  className="form-control"
                  name="studentName"
                  value={studentName}
                  onChange={handleChangeInput}
                />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-3 col-form-label">Tuổi</label>
              <div className="col-sm-9">
                <input
                  type="text"
                  className="form-control"
                  name="age"
                  value={age}
                  onChange={handleChangeInput}
                />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-3 col-form-label">Giới tính</label>
              <div className="col-sm-9">
                <select
                  name="gender"
                  className="form-control"
                  value={gender}
                  onChange={handleChangeInput}
                >
                  <option value={true}>Nam</option>
                  <option value={false}>Nữ</option>
                </select>
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-3 col-form-label">Ngày sinh</label>
              <div className="col-sm-9">
                <input
                  className="form-control"
                  placeholder="dd/mm/yyyy"
                  value={birthDate}
                  name="birthDate"
                  onChange={handleChangeInput}
                />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-3 col-form-label">Nơi sinh</label>
              <div className="col-sm-9">
                <select
                  className="form-control"
                  value={birthPlace}
                  name="birthPlace"
                  onChange={handleChangeInput}
                >
                  <option value={"hn"}>Hà Nội</option>
                  <option value={"hcm"}>TP. Hồ Chí Minh</option>
                  <option value={"dn"}>Đà Nẵng</option>
                  <option value={"qn"}>Quảng Ninh</option>
                </select>
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-3 col-form-label">Địa chỉ</label>
              <div className="col-sm-9">
                <textarea
                  className="form-control"
                  value={address}
                  name="address"
                  onChange={handleChangeInput}
                />
              </div>
            </div>
            {actionName === "ADD" ? (
              <button
                type="submit"
                className="btn btn-primary me-2"
                onClick={{ handleSubmitForm }}
              >
                Submit
              </button>
            ) : (
              <button
                type="submit"
                className="btn btn-primary me-2"
                onClick={handleUpdateForm}
              >
                Edit
              </button>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}
