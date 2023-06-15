import React, { Component } from "react";

export default class Event extends Component {
  //event with arrow function
  handleClick01 = () => {
    console.log("Click 01");
  };
  /**
   * Trong jsx khi sử dụng 1 sự kiện => nếu sử dụng handleClick02() thì hàm sẽ chạy ngay sau khi component mount
   */
  handleClick02 = () => {
    console.log("Click 02");
  };
  handleClick03 = () => {
    console.log("Click 03");
  };
  handleClick04 = (element) => {
    console.log("Click 04", element);
  };
  render() {
    return (
      <div>
        <button onClick={this.handleClick01}>Click 1</button>
        <button onClick={this.handleClick02()}>Click 2</button>
        <button onClick={() => this.handleClick03}>Click 3</button>
        <button onClick={() => this.handleClick04("đă")}>Click 4</button>
      </div>
    );
  }
}
