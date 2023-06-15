import React, { Component } from "react";

export default class ChildrenComp extends Component {
  /**
   * State: dùng để lưu trữ dữ liệu trong component đó => có thể thay đổi được dữ liệu
   * Để sử dụng được state cần khai báo lớp bằng contructor
   * Và sư dụng super để gọi lớp
   * Để cập nhật lại state => sử dụng setState
   */
  constructor() {
    super();
    this.state = {
      studentA: "long",
      question: "Có hay trốn không?",
      answer: "Không",
      display: true,
    };
  }
  handleChangeState = () => {
    this.setState({
      answer: "Cóoooo",
    });
  };
  handleToggleDisplay = () => {
    this.setState({
      display: !this.state.display,
    });
  };
  render() {
    return (
      <div>
        <h2>
          {this.props.titleParent} - Khóa học: {this.props.course}
        </h2>
        <p>{this.props.children}</p>
        <h2>State</h2>
        <p>{this.state.studentA}</p>
        <p>
          {this.state.question} - {this.state.answer}
        </p>
        {/* Quy tắc đặt tên với các hàm xử lý 1 việc gì đó sẽ có tiền tố trước là handle
        với các hàm xử lý 1 sử lý sự kiện gì đó => sẽ có tiền tố là on */}
        <button onClick={this.handleChangeState}>Click !!!</button>

        {/* Cập nhật liên tục */}

        {this.state.display ? (
          <div>
            <p>Anh B sp có nhiệt tình không?</p>
            <p>Có</p>
            <button onClick={this.handleToggleDisplay}>Click</button>
          </div>
        ) : (
          <div>
            <p>Anh B sp có nhiệt tình không?</p>
            <p>Rất nhiệt tình</p>
            <button onClick={this.handleToggleDisplay}>Click</button>
          </div>
        )}
      </div>
    );
  }
}
