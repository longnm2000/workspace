let tasks = [
  {
    name: "HTML",
    isComplete: false,
  },
  {
    name: "CSS",
    isComplete: false,
  },
  {
    name: "Basics of Javascript",
    isComplete: false,
  },
  {
    name: "Node Package Manager (npm)",
    isComplete: false,
  },
  {
    name: "Git",
    isComplete: false,
  },
];

function printObj(arr) {
  let result = "";
  for (let i = 0; i < arr.length; i++) {
    result += `${i + 1}. [${tasks[i].isComplete == false ? "" : "X"}] Task: ${
      arr[i].name
    }\n\n`;
  }
  alert(result);
}

function invalid() {
  alert("Invalid value");
}
printObj(tasks);
let command = prompt("Enter your command (New, Delete, Update, Complete)");
switch (command) {
  case "new":
    let newName = prompt("Enter your new task:");
    if (newName) {
      tasks.push({ name: newName, isComplete: false });
      console.log(tasks);
    } else {
      invalid();
    }
    break;
  case "update":
    let updateIndex = +prompt("Enter position");
    let updateName = prompt("Enter new title");
    if (updateIndex > 0 && updateIndex <= tasks.length) {
      if (updateName) {
        tasks[updateIndex - 1].name = updateName;
        printObj(tasks);
      } else {
        invalid();
      }
    } else {
      alert("Invalid value");
    }
    break;
  case "delete":
    let deleteIndex = +prompt("Enter position");
    if (deleteIndex > 0 && deleteIndex <= tasks.length) {
      tasks.splice(deleteIndex - 1, 1);
      printObj(tasks);
    } else {
      invalid();
    }
    break;
  case "complete":
    let completeIndex = +prompt("Enter position");
    if (completeIndex > 0 && completeIndex <= tasks.length) {
      tasks[completeIndex - 1].isComplete = true;
      printObj(tasks);
    } else {
      invalid();
    }
    break;
  default:
    invalid();
}
