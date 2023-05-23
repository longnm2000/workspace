const addBtn = document.querySelector("#add");
const textInput = document.querySelector("#text");
addBtn.addEventListener("click", () => {
  textInput.insertAdjacentHTML("beforebegin", `<br><input type="text"><br>`);
});
