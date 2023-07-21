import React from "react";
import { useParams } from "react-router-dom";

export default function CourseDetail() {
  // useParams
  const paramId = useParams();
  console.log(paramId);
  return <div>Khóa học có id là {paramId.id}</div>;
}
