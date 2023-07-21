import React, { Component } from "react";

export default class DemoForm3 extends Component {
  constructor() {
    super();
    this.state = {
      studentName: "",
      age: "",
      course: "HTML",
    };
  }
  handeChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({
      [name]: value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    alert(`
    Tên sinh viên: ${this.state.studentName}
    Tuổi: ${this.state.age}
    Khóa học: ${this.state.course}    
    `);
  };
  render() {
    return (
      <div>
        <form action="" onSubmit={this.handleSubmit}>
          <label htmlFor="">Tên sinh viên</label>
          <input
            type="text"
            name="studentName"
            id=""
            value={this.state.studentName}
            onChange={this.handeChange}
          />
          <label htmlFor="">Tuổi</label>
          <input
            type="text"
            name="age"
            id=""
            value={this.state.age}
            onChange={this.handeChange}
          />
          <label htmlFor="">Khóa học</label>
          <select
            value={this.state.course}
            name="course"
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
