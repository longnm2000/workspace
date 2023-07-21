import React from "react";
import { Outlet } from "react-router-dom";

export default function ContactPage() {
  return (
    <div>
      {/* Outlet được sử dụng để xác định vị trí hiển thị component con khi route trùng khớp */}
      <Outlet />
    </div>
  );
}
