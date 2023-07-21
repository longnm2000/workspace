import React, { Component } from "react";
import Timer from "./Timer";
import Button from "./Button";

export default class Clock extends Component {
  constructor() {
    super();
    this.state = {
      time: 0,
      isRunning: true,
    };
  }

  handleStart = () => {
    setInterval(() => {
      this.setState((prevState) => ({
        time: prevState.time + 1,
      }));
    }, 1000);
    this.setState({
      isRunning: true,
    });
  };

  render() {
    const { time } = this.state;
    return (
      <div>
        <Timer time={time} />
        <Button />
      </div>
    );
  }
}
