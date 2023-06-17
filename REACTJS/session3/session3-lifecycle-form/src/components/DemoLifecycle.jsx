import React, { Component } from "react";

export default class DemoLifecycle extends Component {
  /**
   * Lifecycle là vòng đời của 1 component
   * Gồm 4 giai đoạn: Khởi tạo, mounting, updating, unmounting
   * 1. Khởi tạo:
   * Nhiệm vụ: Tạo các state bạn đầu để sử dụng this.state
   * 2. Mounting:
   * - ComponentWillmount => Render => componentDidmount
   * 3. Updating:
   * - componentWillReceivePros = > shouldComponentUpdate = > UNSAFE_componentWillUpdate = > componentDidUpdate
   * 4. Unmounting
   */
  UNSAFE_componentWillMount() {
    console.log("1. componentWillMount");
  }
  componentDidMount() {
    console.log("3. componentDidMount");
  }
  componentWillReceiveProps() {}
  shouldComponentUpdate() {}
  UNSAFE_componentWillUpdate() {}
  componentDidUpdate() {}
  render() {
    console.log("2. Render");
    return <div>DemoLifecycle</div>;
  }
}
