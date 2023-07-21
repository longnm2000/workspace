import React, { useState } from "react";

export default function ProductList() {
  const [products, setProducts] = useState([
    { id: 1, name: "Product 1", price: 2200 },
    { id: 2, name: "Product 2", price: 200 },
    { id: 3, name: "Product 3", price: 2000 },
  ]);
  return (
    <div>
      <h2>Product List</h2>
      <ul>
        {products.map((e) => (
          <li key={e.id}>
            Name: {e.name} - Price: $ {e.price}
          </li>
        ))}
      </ul>
    </div>
  );
}
