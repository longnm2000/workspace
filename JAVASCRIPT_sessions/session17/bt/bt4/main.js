const todoList = ["Go to bed at 11pm", "Do homework at 8pm"];
let action = prompt(
  "Nhập C để create, nhập R để hiển thị, nhập U để update, nhập D để delete"
).toUpperCase();
let result = "";
switch (action) {
  case "C":
    let newTodo = prompt("Nhập việc cần làm mới");
    let newTodo1 = newTodo.split(",");

    let newTodoList = todoList.concat(newTodo1);
    console.log(newTodoList);
    for (let i = 0; i < newTodoList.length; i++) {
      result += `${i + 1}. ${newTodoList[i]}\n`;
    }
    alert(result);
    break;
  case "R":
    for (let i = 0; i < todoList.length; i++) {
      result += `${i + 1}. ${todoList[i]}\n`;
    }
    alert(result);
    break;
  case "U":
    let numberIndex = +prompt("Nhập vị trí cần update theo index");
    if (Number.isInteger(numberIndex) && numberIndex >= 0) {
      let infoUpdate = prompt("Nhập nội dung muốn update");
      todoList[numberIndex] = infoUpdate;
      for (let i = 0; i < todoList.length; i++) {
        result += `${i + 1}. ${todoList[i]}\n`;
      }
      alert(result);
    } else {
      alert("Invalid Value");
    }
    break;
  case "D":
    let deleteIndex = +prompt("Nhập vị trí muốn xóa theo index");
    if (Number.isInteger(deleteIndex) && deleteIndex >= 0) {
      todoList.splice(deleteIndex, 1);
      console.log(todoList);
      for (let i = 0; i < todoList.length; i++) {
        result += `${i + 1}. ${todoList[i]}\n`;
      }
      alert(result);
    } else {
      alert("Invalid Value");
    }
    break;
  default:
    alert("Invalid Value");
}
