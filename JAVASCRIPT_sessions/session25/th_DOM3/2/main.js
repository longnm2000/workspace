const hideBtn = document.querySelector(".btn-hide");
const darkDiv = document.querySelector(".dark");
const modalDiv = document.querySelector(".modal");
const openBtn = document.querySelector(".open");
function addHide() {
  darkDiv.classList.add("hide");
  modalDiv.classList.add("hide");
}
addHide();
console.log(hideBtn);
hideBtn.addEventListener("click", () => {
  addHide();
});
openBtn.addEventListener("click", () => {
  darkDiv.classList.remove("hide");
  modalDiv.classList.remove("hide");
});
darkDiv.addEventListener("click", () => {
  addHide();
});
