import React, { useState } from "react";

export default function SearchAndFilter() {
  const [filter, setFilter] = useState("");
  const [data, setData] = useState([
    { name: "Nguyen Long", age: 18 },
    { name: "Manh Long", age: 20 },
    { name: "Phan Long", age: 22 },
    { name: "Than", age: 30 },
    { name: "Ma", age: 12 },
  ]);

  const filterData = data.filter(
    (e) => e.name.toLowerCase().indexOf(filter.toLowerCase()) !== -1
  );
  return (
    <div>
      <input
        type="text"
        name=""
        id=""
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />
      <ul>
        {filterData.map((e, i) => (
          <li key={i}>
            {e.name} - {e.age}
          </li>
        ))}
      </ul>
    </div>
  );
}
