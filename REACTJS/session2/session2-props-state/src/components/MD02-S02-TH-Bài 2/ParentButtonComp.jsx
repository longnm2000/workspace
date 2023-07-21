import React, { Component } from "react";
import ButtonComp from "./ButtonComp";

export default class ParentButtonComp extends Component {
  render() {
    return (
      <div>
        <ButtonComp text="Click me" color="red" background="blue" />
      </div>
    );
  }
}
