const showBtn = document.querySelector(".btn-show");
const hideBtn = document.querySelector(".btn-hide");
const textContent = document.querySelector(".text");
console.log(textContent);
showBtn.addEventListener("click", () => {
  textContent.classList.add("show");
  textContent.classList.remove("hide");
});
hideBtn.addEventListener("click", () => {
  textContent.classList.add("hide");
  textContent.classList.remove("show");
});
