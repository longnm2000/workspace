import React from "react";

export default function Student({ keyStudent, infoStudent, handleUpdate }) {
  const handleEditStudent = (index) => {
    handleUpdate(index, true, "UPDATE");
  };

  return (
    <tr key={keyStudent}>
      <td>{keyStudent + 1}</td>
      <td>{infoStudent.studentId}</td>
      <td>{infoStudent.studentName}</td>
      <td>{infoStudent.age}</td>
      <td>{infoStudent.gender ? "Nam" : "Nữ"}</td>
      <td>
        <div className="template-demo">
          <button type="button" className="btn btn-danger btn-icon-text">
            Xem
          </button>
          <button
            type="button"
            className="btn btn-warning btn-icon-text"
            onClick={() => handleEditStudent(keyStudent)}
          >
            Sửa
          </button>
          <button type="button" className="btn btn-success btn-icon-text">
            Xóa
          </button>
        </div>
      </td>
    </tr>
  );
}
