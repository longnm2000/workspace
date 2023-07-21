import React, { Component } from "react";
import HeaderComp from "./HeaderComp";
import ListItemComp from "./ListItemComp";
import "./style.css";

export default class ParentItemsComp extends Component {
  render() {
    return (
      <div>
        <HeaderComp />
        <ListItemComp />
      </div>
    );
  }
}
