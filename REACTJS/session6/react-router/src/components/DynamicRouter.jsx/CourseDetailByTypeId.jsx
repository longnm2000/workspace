import React from "react";
import { useParams } from "react-router-dom";

export default function CourseDetailByTypeId() {
  const param = useParams();
  return (
    <div>
      Khóa học có id {param.id} - type {param.type}
    </div>
  );
}
