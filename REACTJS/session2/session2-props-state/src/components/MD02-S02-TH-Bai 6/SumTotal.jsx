import React, { Component } from "react";

export default class SumTotal extends Component {
  constructor() {
    super();
    this.state = {
      number: "",
      array: [],
      total: 0,
    };
  }
  handleChangeInputValue = (e) => {
    this.setState({
      number: +e.target.value,
    });
  };
  handleAddInputValue = (e) => {
    e.preventDefault();
    this.setState({
      array: [...this.state.array, this.state.number],
      total: this.state.total + this.state.number,
    });
  };
  render() {
    return (
      <>
        <form onSubmit={this.handleAddInputValue}>
          <input
            type="text"
            value={this.state.number}
            onChange={this.handleChangeInputValue}
          />
          <button>Add</button>
        </form>
        <p style={{ color: "red" }}>
          {this.state.array.join(" + ") + "= " + this.state.total}
        </p>
      </>
    );
  }
}
