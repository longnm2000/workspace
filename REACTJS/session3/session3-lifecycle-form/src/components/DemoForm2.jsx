import React, { Component } from "react";

export default class DemoForm2 extends Component {
  constructor() {
    super();
    this.state = {
      course: "ReactJS",
    };
  }

  handeChange = (e) => {
    this.setState({
      course: e.target.value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    alert("Khóa học bạn chọn là " + this.state.course);
  };
  render() {
    return (
      <div>
        <form action="" onSubmit={this.handleSubmit}>
          <label htmlFor="">Chọn khóa học</label>
          <select
            value={this.state.course}
            name=""
            id=""
            onChange={this.handeChange}
          >
            <option value="HTML">HTML</option>
            <option value="CSS">CSS</option>
            <option value="Javascript">Javascript</option>
            <option value="ReactJS">ReactJS</option>
          </select>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}
