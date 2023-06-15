import React, { Component } from "react";

export default class FormComponent extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <div className="heading">Xin chào các bạn</div>
        </div>
        <form action="">
          <label htmlFor="name" className="form-lable">
            Tên đăng nhập
          </label>
          <br />
          <input type="text" className="form-input" id="name" />
          <br />
          <button className="form-submit" type="submit">
            Đăng nhập
          </button>
        </form>
      </div>
    );
  }
}
