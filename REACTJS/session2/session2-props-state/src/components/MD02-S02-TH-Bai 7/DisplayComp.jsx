import React, { Component } from "react";

export default class DisplayComp extends Component {
  constructor() {
    super();
    this.state = {
      color: "black",
      isShow: false,
      fontSize: 12,
      content: "Hello",
    };
  }
  handeleToggle = () => {
    this.setState({
      isShow: !this.state.isShow,
    });
  };
  handleChangeBackground = () => {
    this.setState({
      color: this.state.color === "black" ? "pink" : "black",
      fontSize: this.state.fontSize === 12 ? 14 : 12,
      content: this.state.content === "Hello" ? "Nice" : "Hello",
    });
  };
  render() {
    return (
      <div>
        {this.state.isShow ? (
          <>
            <p
              style={{ color: this.state.color, fontSize: this.state.fontSize }}
            >
              {this.state.content}
            </p>
            <button onClick={this.handleChangeBackground}>Change</button>
          </>
        ) : (
          <button onClick={this.handeleToggle}>Toggle</button>
        )}
      </div>
    );
  }
}
