import React, { useEffect, useState } from "react";

export default function DemoUseEffect() {
  /**
   * useEffect dùng để callAPI, listen DOM event, update DOM, ...
   * useEffect được thay thế cho componentDidMount and componentDidUpdate:
   *  Trong useEffect có 3 trường hợp
   * - TH1:
   * useEffect(callback)
   * Tính chất:
   * + useEffect(callback) sẽ luôn được gọi mỗi khi conponent monut
   * + useEffect(callback) sẽ được gọi mỗi khi component re-render
   * + Gọi callback ngay sau khi component thêm element vào DOM
   * - TH2: useEffect(callback,[])
   * => Ở những phiên bản cũ: [] cleanUp, còn ở phiên bản mới deps
   * Tính chất:
   * + useEffect(callback,[]) sẽ luôn được gọi mỗi khi conponent monut
   * + callback sẽ chỉ được gọi 1 lần khi component được re-render
   * - TH3: useEffect(callback,[deps])
   *  Tính chất:
   * + useEffect(or callback) sẽ luôn được gọi mỗi khi conponent monut
   * + callback sẽ được gọi mỗi khi deps thay đổi
   */

  const [text, setText] = useState("");

  const [count, setCount] = useState(0);

  // Trường hợp 1
  //   useEffect(() => {
  //     console.log("Hello World");
  //   });

  // Trường hợp 2
  //   useEffect(() => {
  //     console.log("useEffect đang được chạy");
  //   }, []);

  // Trường hợp 3

  useEffect(() => {
    console.log("useEffect đang được chạy");
  }, [text, count]);

  return (
    <div>
      <h2>demo</h2>
      <input
        type="text"
        name=""
        id=""
        onChange={(e) => setText(e.target.value)}
      />
      {console.log("Component được rerender")}
      <h3>Number</h3>
      <p>$ {count}</p>
      <button onClick={() => setCount(count + 1)}>Up</button>
      <button onClick={() => setCount(count - 1)}>Down</button>
    </div>
  );
}
