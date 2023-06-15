import React, { Component } from "react";

export default class ValueInputComp extends Component {
  constructor() {
    super();
    this.state = {
      textInput: "",
    };
  }
  handleChangeInputValue = (e) => {
    this.setState({ textInput: e.target.value });
  };
  handleSubmitForm = (e) => {
    e.preventDefault();
    alert(this.state.textInput);
  };
  render() {
    return (
      <form onSubmit={this.handleSubmitForm}>
        <input
          type="text"
          id="textInput"
          value={this.state.textInput}
          onChange={this.handleChangeInputValue}
        />
        <button>Submit</button>
      </form>
    );
  }
}
