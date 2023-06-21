import React, { useState } from "react";
import Control from "./Control";
import ListStudent from "./ListStudent";
import Form from "./Form";

export default function ParentComp() {
  const [students, setStudents] = useState([
    {
      studentId: "SV001",
      studentName: "Nguyen Van A",
      age: 20,
      gender: true,
      birthDate: "12/02/2022",
      birthPlace: "hn",
      address: "hanoi",
    },
    {
      studentId: "SV002",
      studentName: "Nguyen Van B",
      age: 21,
      gender: false,
      birthDate: "12/02/2022",
      birthPlace: "dn",
      address: "dn",
    },
    {
      studentId: "SV003",
      studentName: "Nguyen Van C",
      age: 19,
      gender: true,
      birthDate: "12/02/2022",
      birthPlace: "hcm",
      address: "hcm",
    },
  ]);

  const [actionName, setActionName] = useState("ADD");
  const [toggle, setToggle] = useState(false);

  const handleToogleAction = (toggle, action) => {
    setActionName(action);
    setToggle(toggle);
  };

  const handleSubmitAdd = (newStudent, toggle) => {
    setStudents([...students, newStudent]);
    setToggle(toggle);
  };

  const [selectStudent, setSelectStudent] = useState({});

  const handleUpdateStudent = (selectStudent, toggle, actionName) => {
    setSelectStudent(selectStudent);
    setToggle(toggle);
    setActionName(actionName);
  };

  const handleSubmitUpdate = (studentUpdate, toggle) => {
    const update = students.map((e, i) =>
      e.studentId === studentUpdate.studentId ? studentUpdate : e
    );
    setStudents(update);
    setToggle(toggle);
  };

  return (
    <div className="row">
      <div className="col-lg-7 grid-margin stretch-card">
        <div className="card">
          {/* START CONTROL */}
          <Control toggle={toggle} actionToggle={handleToogleAction} />
          {/* END CONTROL */}
          {/* START LIST STUDENT */}
          <ListStudent
            listStudentsProps={students}
            handleUpdateStudent={handleUpdateStudent}
          />
          {/* END LIST STUDENT */}
        </div>
      </div>
      {/* START FORM SINH VIEN */}
      {toggle ? (
        <Form
          submitForm={handleSubmitAdd}
          actionName={actionName}
          handleSubmitUpdate={handleSubmitUpdate}
        />
      ) : (
        <></>
      )}
      {/* END FORM SINH VIÊN */}
    </div>
  );
}
