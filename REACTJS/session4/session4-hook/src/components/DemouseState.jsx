import React from "react";
import { useState } from "react";

function DemouseState() {
  /**
   * có 2 loại component: class component và function component
   * Từ phiên bản 16.8.x đã chuyển sang sử dụng function component
   * Cách khai báo state trong function component
   */
  //   const [nameState, setNameState] = useState("Hello World");
  /**
   * trong đó:
   * - nameState: là tên state
   * - setNameState: là 1 hàm để thay đổi giá trị cho nameState
   * - initState: là giá trị khởi tạo ban đầu
   */
  //   console.log(nameState);

  /**
   * Kiểu dữ liệu:
   * Kiểu dữ liệu nguyên thủy: number, string,boolean,...
   * - number:
   */
  const [count, setCount] = useState(0);
  // - String:
  const [text, setText] = useState("Bách Cọp");

  const handleChangeState = () => {
    setText("Nam Anh hay trốn !!!");
  };
  // - Boolean
  const [toogle, setToggle] = useState(true);
  const handleToggle = () => {
    setToggle(!toogle);
  };

  // Kiểu dữ liệu phức tạp: Array, Object
  // - Array
  const [arrList, setArrList] = useState([1, 2, 3, 4]);

  const handleRandomNumber = () => {
    setArrList([...arrList, Math.floor(Math.random() * 10)]);
  };

  // - Object + Array

  const [listUser, setListUser] = useState([
    { id: 1, name: "Nam Anh", age: 20 },
    { id: 2, name: "Nam", age: 22 },
    { id: 3, name: "Hàn", age: 25 },
  ]);

  // - Object
  const [objList, setObjList] = useState({
    objCount: 10,
    objArr: [1, 3, 5, 7],
  });

  const handleRandomObj = () => {
    setObjList({
      ...objList,
      objArr: [...objList.objArr, Math.floor(Math.random() * 10)],
    });
  };

  return (
    <div>
      <h2>Demo useState</h2>
      <h3>Number</h3>
      <p>$ {count}</p>
      <button onClick={() => setCount(count + 1)}>Up</button>
      <button onClick={() => setCount(count - 1)}>Down</button>
      <h3>String:</h3>
      <p>{text}</p>
      <button onClick={handleChangeState}>Change</button>
      <h3>Boolean:</h3>
      <div>
        {toogle ? (
          <div>
            <p>LMAO</p>
          </div>
        ) : (
          <div>
            <p>LOL</p>
          </div>
        )}
        <button onClick={handleToggle}>Click</button>
      </div>
      <h3>Array :</h3>
      <p>{arrList.toString()}</p>
      <button onClick={handleRandomNumber}>Random Number</button>
      <h3>List User</h3>
      <table border={1}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>AGE</th>
          </tr>
        </thead>
        <tbody>
          {listUser.map((e, i) => (
            <tr key={i}>
              <td>{e.id}</td>
              <td>{e.name}</td>
              <td>{e.age}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <h3>Object:</h3>
      <p>{objList.objCount}</p>
      <button
        onClick={() =>
          setObjList({ ...objList, objCount: objList.objCount + 1 })
        }
      >
        Up
      </button>
      <button
        onClick={() =>
          setObjList({ ...objList, objCount: objList.objCount - 1 })
        }
      >
        Down
      </button>
      <p>{objList.objArr.toString()}</p>
      <button onClick={handleRandomObj}>Random</button>
    </div>
  );
}

export default DemouseState;
