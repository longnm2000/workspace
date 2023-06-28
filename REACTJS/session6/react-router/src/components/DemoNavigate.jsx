import React from "react";
import { useNavigate } from "react-router-dom";

export default function DemoNavigate() {
  // Sử dụng navigate để chuyển trang
  //useNavigate là 1 hook được cung cấp bởi react-router-dom, dùng để sử dụng với history
  const navigate = useNavigate();
  return (
    <div>
      <button onClick={() => navigate("/about")}>Click go to About</button>
      {/* Sử dụng navigate với history */}
      <button onClick={() => navigate(-1)}>Go to back 1</button>
      <button onClick={() => navigate(-2)}>Go to back 2</button>
      <button onClick={() => navigate(1)}>Go to back 1</button>
      <button onClick={() => navigate(2)}>Go to back 2</button>
      {/* Sử dụng navigate với replace  = true */}
      <button onClick={() => navigate("/about", { replace: true })}>
        Go to about with replace
      </button>
      {/* Sử dụng navigate để truyền dữ liệu */}
      <button onClick={() => navigate("/about", { state: { count: 10 } })}>
        Go to about with data
      </button>
    </div>
  );
}
