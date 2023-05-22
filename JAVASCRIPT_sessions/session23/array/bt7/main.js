const studentList = [
  {
    id: 1,
    name: "Alice",
    gender: "male",
  },
  {
    id: 2,
    name: "aliCE",
    gender: "female",
  },
  {
    id: 3,
    name: "Easy Frontend",
    gender: "male",
  },
];
function hasAlice(studentList) {
  for (let item of studentList) {
    if (item.name.toLowerCase() === "alice" && item.gender === "female") {
      console.log(item);
      return true;
    }
  }
  return false;
}
console.log(hasAlice(studentList));
