import React, { Component } from "react";

export default class ToggleContent extends Component {
  constructor() {
    super();
    this.state = {
      content: "Yua Mikami",
    };
  }
  handleToggleContent = () => {
    this.setState({
      content: this.state.content === "Yua Mikami" ? "hello" : "Yua Mikami",
    });
  };
  render() {
    return (
      <div>
        <p>{this.state.content}</p>
        <button onClick={this.handleToggleContent}>Click</button>
      </div>
    );
  }
}
