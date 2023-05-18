let employees = ["Nguyễn Mạnh Long", "Nguyễn Đức Mạnh", "Nguyễn Mạnh Đức"];

function showDetail(arr) {
  let detail = "Tên các nhân viên:\n";
  for (let i = 0; i < arr.length; i++) {
    detail += `${i + 1}. ${arr[i]}\n`;
  }
  alert(detail);
}
function invalid() {
  alert("Invalid value");
}
let isContinue = "";

do {
  let action = +prompt(
    "Nhập:\n1 để Read\n2 để Create\n3 để Update\n4 để Delete"
  );
  switch (action) {
    case 1:
      showDetail(employees);
      break;
    case 2:
      let newName = prompt("Nhập tên nhân viên mới");
      if (newName) {
        employees.push(newName);
        showDetail(employees);
      } else {
        invalid();
      }
      break;
    case 3:
      let updateIndex = +prompt("Nhập vị trí tên nhân viên cần sửa");
      let updateName = prompt("Nhập tên mới");
      if (updateIndex > 0 && updateIndex <= employees.length) {
        employees[updateIndex - 1] = updateName;
        showDetail(employees);
      } else {
        invalid();
      }
      break;
    case 4:
      let deleteIndex = +prompt("Nhập vị trí tên nhân viên cần xóa");
      if (deleteIndex > 0 && deleteIndex <= employees.length) {
        employees.splice(deleteIndex - 1, 1);
        showDetail(employees);
      } else {
        invalid();
      }
      break;
    default:
      invalid();
  }
  isContinue = prompt("Có tiếp tục không? Yes/No");
} while (isContinue == "yes");
