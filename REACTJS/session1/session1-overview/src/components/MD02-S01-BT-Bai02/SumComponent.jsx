import React, { Component } from "react";

export default class SumComponent extends Component {
  render() {
    const a = 3,
      b = 4;
    return (
      <h2>
        Tổng của {a} và {b} là : {a + b}
      </h2>
    );
  }
}
