import React, { Component } from "react";

export default class ShowInputValue extends Component {
  constructor() {
    super();
    this.state = {
      content: "",
    };
  }
  handleChangeValue = (e) => {
    this.setState({
      content: e.target.value,
    });
  };
  handleSubmitValue = (e) => {
    e.preventDefault();
    alert(this.state.content);
  };
  render() {
    return (
      <div>
        <form action="" onSubmit={this.handleSubmitValue}>
          <input
            type="text"
            name="value-text"
            id="input-text"
            value={this.state.value}
            onChange={this.handleChangeValue}
          />
          <button>Add</button>
        </form>
      </div>
    );
  }
}
