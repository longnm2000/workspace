import React, { useReducer } from "react";

export default function DemoUseReducer() {
  /**
   * useReducer được cung cấp như sự lựa chọn để thay thế cho useState
   * useState được sử dụng trong các component đơn giản
   * useReducer được sử dụng trong các component phức tạp
   *
   * Khi sử dụng với useState:
   * - B1: Khai báo giá trị ban đầu
   * - B2: Action (up: count + 1, down: count - 1)
   *
   * Khi sử dụng với Reducer:
   * - B1: Khai báo giá trị ban đầu
   * - B2: Action (up: count + 1, down: count - 1)
   * - B3: Reducer
   * - B4: Dispatch
   * Ví dụ:
   */
  // B1: Khai báo giá trị ban đầu (initialState)
  const initialState = 0;
  // B2: Khai Báo các action
  const ACTION_UP = "UP";
  const ACTION_DOWN = "DOWN";
  const ACTION_RANDOM = "RANDOM";
  // B3: Reducer
  // Reducer nhận vào 2 tham số:
  // Tham số 1: State hiện tại
  // Tham số 2: State action
  // reducer sẽ xem state, action là gì => xử lý
  const reducer = (state, action) => {
    switch (action) {
      case ACTION_UP:
        return state + 1;
      case ACTION_DOWN:
        return state - 1;
      case ACTION_RANDOM:
        return Math.floor(Math.random() * 1000000000);
      default:
        break;
    }
  };
  // Dispatch
  // Khai báo giống useState nhưng tham số thứ 2 sẽ được đổi thành dispatch
  //useReducer có thể nhận vào 3 đối số:  1. reducer, 2. giá trị khởi tạo ban đầu,
  const [count, dispatch] = useReducer(reducer, initialState);
  // Khi sử dụng 1 sự kiện gì đấy => sử dụng dispatch để gửi hành động lên cho reducer xử lý
  return (
    <div>
      <h2>Demo useReducer</h2>
      <p>{count}</p>
      <button onClick={() => dispatch(ACTION_UP)}>UP</button>
      <button onClick={() => dispatch(ACTION_DOWN)}>DOWN</button>
      <button onClick={() => dispatch(ACTION_RANDOM)}>RANDOM</button>
    </div>
  );
}
