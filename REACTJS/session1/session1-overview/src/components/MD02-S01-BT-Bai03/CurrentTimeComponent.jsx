import React, { Component } from "react";

export default class CurrentTimeComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timeString: "",
    };
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      const currentDate = new Date();
      const timeString = currentDate.toLocaleTimeString();
      this.setState({ timeString });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return <div>Bây giờ là: {this.state.timeString}</div>;
  }
}
