// Lấy element của form
let formEmlement = document.querySelector(".form");
console.log(formEmlement);
// Lấy element của ô input
let inputElement = document.getElementById("form-input");
console.log(inputElement);
// Lấy element của danh sách todo
let listElement = document.getElementById("toto-list");

// Tạo ra một mảng nếu trên local chưa có hoặc lấy dữ liệu từ local nếu đã có
// Dữ liệu trên local là ở dạng Json
let todos = JSON.parse(localStorage.getItem("todos")) || [];

// Gắn dữ liệu vào DOM có 2 cách: innerHTML, textContent

// Hàm render dữ liệu ra ngoài giao diện
function renderData() {
  // Khi chưa có dữ liệu thì gán giá trị cho list là một chuỗi rỗng
  listElement.innerHTML = "";
  // Khi có dữ liệu trên local đã lấy về
  todos.forEach(function (todo, index) {
    // Khởi tạo một element li mới thông qua phương thức createElement
    // element: các thẻ html
    // attribute: thuộc tính của thẻ: <a href></a>
    let liElement = document.createElement("li");
    // Khởi tạo thêm một phần tử button
    let buttonElement = document.createElement("button");
    // Gán nội dung cho button
    buttonElement.textContent = "Xóa";

    // Bắt sự kiện xóa
    buttonElement.addEventListener("click", function () {
      // sử dụng phương thức splice để cắt hoặc xóa phần tử tại vị trí index khỏi mảng
      todos.splice(index, 1);
      // Sau khi cắt xong thì tiến hành ghi đè lại các phần tử trong mảng
      localStorage.setItem("todos", JSON.stringify(todos));
      // Gọi hàm render
      renderData();
    });

    // Gán giá trị của todo cho thẻ li
    liElement.textContent = todo;

    // append vào DOM
    listElement.appendChild(liElement);
    liElement.appendChild(buttonElement);
  });
}

// Gọi hàm render
renderData();

// Hàm thêm công việc
function addTodo() {
  // Lấy ra value của ô input
  let inputValue = inputElement.value;

  // Kiểm tra dữ liệu đầu vào
  if (inputValue != "") {
    // Tiến hành thêm công việc lên local
    todos.push(inputValue);
    localStorage.setItem("todos", JSON.stringify(todos));
  } else {
    alert("Tên công việc không được để trống ");
  }
  // Gọi hầm loadData
  renderData();
}

// Bắt sự kiện onsubmit form
formEmlement.addEventListener("submit", function (event) {
  event.preventDefault();
  addTodo();
});
