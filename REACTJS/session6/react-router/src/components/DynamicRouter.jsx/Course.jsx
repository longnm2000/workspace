import React from "react";
import { useSearchParams } from "react-router-dom";

export default function Course() {
  //  Khai báo searchParam
  const [searchParam, setSearchParam] = useSearchParams();
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>STT</th>
            <th>Name Course</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>React</td>
            <td>12000</td>
            <td>
              <button
                onClick={() =>
                  setSearchParam({ Course: "ReactJS", Price: 12000 })
                }
              >
                Detail
              </button>
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td>NodeJS</td>
            <td>14000</td>
            <td>
              <button
                onClick={() =>
                  setSearchParam({ Course: "NodeJS", Price: 14000 })
                }
              >
                Detail
              </button>
            </td>
          </tr>
        </tbody>
      </table>
      <h3>Chi tiết khóa học</h3>
      <p>Khóa học tên: {searchParam.get("Course")}</p>-Giá tiền:
      {searchParam.get("Price")}
    </div>
  );
}
