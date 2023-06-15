import React, { Component } from "react";

export default class CountClickComp extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }
  handleCountClick = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };
  render() {
    return (
      <div>
        <p>Số lần bấm của bạn là: {this.state.count}</p>
        <button onClick={this.handleCountClick}>Click</button>
      </div>
    );
  }
}
