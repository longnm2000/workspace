import React, { useState } from "react";

export default function ShippingCalculator() {
  const [weight, setWeight] = useState("");
  const [shippingMethod, setShippingMethod] = useState("");
  const [shippingCost, setShippingCost] = useState(0);

  const handleWeightChange = (e) => {
    setWeight(e.target.value);
  };
  const handleShippingMethodChange = (e) => {
    setShippingMethod(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let rate = 0;
    switch (shippingMethod) {
      case "ground":
        if (weight <= 2) {
          rate = 1.5;
        } else if (weight <= 6) {
          rate = 3;
        } else if (weight <= 10) {
          rate = 4;
        } else {
          rate = 4.75;
        }
        break;
      case "priorty":
        if (weight <= 2) {
          rate = 3.5;
        } else if (weight <= 6) {
          rate = 4;
        } else if (weight <= 10) {
          rate = 4.5;
        } else {
          rate = 5;
        }
        break;
      default:
        rate = 0;
        break;
    }
    setShippingCost(rate * weight);
  };
  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="weight">Weight</label>
          <input
            type="text"
            name=""
            id="weight"
            value={weight}
            onChange={handleWeightChange}
          />
        </div>
        <div>
          <label htmlFor="method">Shipping Method</label>
          <select
            name=""
            id="method"
            value={shippingMethod}
            onChange={handleShippingMethodChange}
          >
            <option value="ground">Ground</option>
            <option value="priorty">Priorty</option>
          </select>
        </div>
        <button>Caculate Shipping Cost</button>
      </form>
      <div>
        <h2>Shipping Cost</h2>
        <span>{`$ ${shippingCost.toFixed(2)}`}</span>
      </div>
    </div>
  );
}
