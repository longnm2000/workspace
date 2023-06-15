import React, { Component } from "react";
import ChildrenComp from "./ChildrenComp";

export default class ParentComp extends Component {
  /**
   * Props: là viết tắt của properties, dùng để lưu trữ các attribute,
   * dùng để giao tiếp giữa các component với nhau (ví dụ: từ cha xuống con)
   * giá trị props không thể thay đổi
   * ParentComp => ChildrenComp
   */
  render() {
    const title = "Rikkei Academy";
    return (
      <div>
        <ChildrenComp titleParent={title} course={"ReactJS"}>
          Time:15 buổi
        </ChildrenComp>
      </div>
    );
  }
}
