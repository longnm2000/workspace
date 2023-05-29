// Tạo ra 1 biến là danh sách các todo cần phải làm
// để mô phỏng database (kho lưu trữ dữ liệu) ở trên server

// Logic để lấy dữ liệu về từ server

// Lấy dữ liệu trên server
let todos = [
  {
    id: 1,
    content: "Hit the gym",
    completed: true,
  },
  {
    id: 2,
    content: "Pay bills",
    completed: false,
  },
  {
    id: 3,
    content: "Meet George",
    completed: true,
  },
  {
    id: 4,
    content: "Buy eggs",
    completed: false,
  },
];
// Đổ dữ liệu từ đã lấy trên server ra giao diện
// HTML thông Javascript

// Read - Render dữ liệu từ db
const ul = document.getElementById("myUL");
const addBtn = document.querySelector(".addBtn");
const input = document.querySelector("#myInput");

function renderTodo() {
  ul.innerHTML = "";
  for (let i = 0; i < todos.length; i = i + 1) {
    //   C1:
    //   let li = `<li>${todos[i]}</li>`;
    //   ul.innerHTML = ul.innerHTML + li;

    //   C2:
    let li = document.createElement("li");
    li.innerHTML = todos[i].content;
    li.classList.add("todo-item");
    li.id = todos[i].id;
    if (todos[i].completed === true) {
      li.classList.add("checked");
    }
    let span = document.createElement("span");
    span.innerHTML = "x";
    span.classList.add("close");
    li.appendChild(span);
    ul.appendChild(li);
  }
}

renderTodo();

// Create - Tạo mới todo
addBtn.onclick = function () {
  if (input.value !== "") {
    // B1: Lưu trữ dữ liệu vào kho lưu trữ (todos)
    let newTodo = {
      id: Math.floor(Math.random() * 10000000000), // [0 ---- 0.999999999999],
      content: input.value,
      completed: false,
    };
    todos.push(newTodo);
    input.value = "";
    // B2: Render lại giao diện theo dữ liệu mới vừa được thêm
    renderTodo();
  }
};

// Update - Update trạng thái completed của todo đang click vào

ul.onclick = function (event) {
  if (event.target.classList.contains("todo-item")) {
    // Tìm ra vị trí của todo có trong mảng todos
    console.log(event.target.id);
    let findIndex = todos.findIndex(function (element, index) {
      return element.id == event.target.id;
    });
    // update lại trạng thái completed
    todos[findIndex].completed = !todos[findIndex].completed;

    renderTodo();
  }
  if (event.target.classList.contains("close")) {
    console.log(event.target);
    // Tìm ra nút vị trí của todo có trong mảng todos
    // Sử dụng .parentElement/.children

    // Xoá phần tử có vị trí vừa tìm thấy thấy .splice(findIndex, 1)

    // Gọi lại hàm renderTodo()
  }
};
