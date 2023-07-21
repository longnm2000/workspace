const btnDm = document.getElementById("btn-dm");
const mainBox = document.querySelector(".main");
btnDm.addEventListener("click", () => {
  mainBox.classList.toggle("dark-mode");
});
