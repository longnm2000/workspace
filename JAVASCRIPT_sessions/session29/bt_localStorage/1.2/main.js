const form = document.getElementById("main-form");
const errorContainer = document.querySelector(".error");
let error = "";
console.log(form);
form.addEventListener("submit", (e) => {
  error = "";
  e.preventDefault();
  console.log("helo", form.email.value, form.password.value);
  let email = form.email.value;
  let password = form.password.value;
  let passRegex =
    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;

  let emailRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if (!emailRegex.test(email)) {
    error += "Email không hợp lệ!";
  }
  if (!passRegex.test(password)) {
    error += "<br>Password không hợp lệ! ";
  }
  if (error) {
    errorContainer.classList.remove("hide");
    errorContainer.innerHTML = error;
  } else {
    errorContainer.classList.add("hide");
  }
  console.log(error);
  let users = JSON.parse(localStorage.users);

  if (users.account === email && users.password) {
    location.href = "./index1.html";
  }

  /**
   * Kiểm tra 1 cuỗi ứng với 1 mẫu quy tắc nào đó
   * Sử dụng Regular Expression (Regex)
   */
});
