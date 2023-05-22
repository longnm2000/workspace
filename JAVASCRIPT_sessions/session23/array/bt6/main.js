const studentList = [
  { id: 1, name: "Easy" },
  { id: 2, name: "Frontend" },
];

function hasStudent(studentList, studentId) {
  for (let item of studentList) {
    if (item.id == studentId) {
      console.log(item.name);
      return true;
    }
  }
  return false;
}
console.log(hasStudent(studentList, 2));
