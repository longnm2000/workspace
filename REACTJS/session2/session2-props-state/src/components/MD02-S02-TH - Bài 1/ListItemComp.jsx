import React, { Component } from "react";
import ItemComp from "./ItemComp";

export default class ListItemComp extends Component {
  render() {
    return (
      <div className="container">
        <ItemComp
          img={"https://i.imgur.com/jImRpPw.jpg"}
          name={"AirPods Pro"}
          price={"249"}
        />

        <ItemComp
          img={"https://i.imgur.com/LUyQhmF.jpg"}
          name={"Nintendo Switch"}
          price={"299"}
        />

        <ItemComp
          img={"https://i.imgur.com/CugpEfY.jpg"}
          name={"PS5"}
          price={"499"}
        />

        <ItemComp
          img={"https://i.imgur.com/HgPROm3.jpg"}
          name={"Xbox Series X"}
          price={"499"}
        />

        <ItemComp
          img={"https://i.imgur.com/SH7FrjV.jpg"}
          name={"Iphone 14 Pro Max - 1TB"}
          price={"1,599"}
        />

        <ItemComp
          img={"https://i.imgur.com/1Vf4DWy.jpg"}
          name={"Samsung S22 Ultra - 1TB"}
          price={"1,399"}
        />

        <ItemComp
          img={"https://i.imgur.com/69V42nb.jpg"}
          name={"MacBook Pro 14' M1 Max (64GB RAM | 4TB)"}
          price={"4,699"}
        />

        <ItemComp
          img={"https://i.imgur.com/TaO01Rv.jpg"}
          name={"2022 Mac Studio M1 Ultra (128GB RAM | 8TB)"}
          price={"6,999"}
        />

        <ItemComp
          img={"https://i.imgur.com/PXJj7z0.jpg"}
          name={"Pro Gaming PC(AMD 5950X, RTX 3090, 64GB, 4TB SSD)"}
          price={"4,950"}
        />
      </div>
    );
  }
}
