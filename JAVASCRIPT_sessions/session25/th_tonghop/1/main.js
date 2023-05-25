function newElement() {
  const inputValue = document.getElementById("myInput").value;
  const li = `<li>${inputValue}<span class="close">X</span></li>`;
  if (inputValue === "") {
    alert("Nhập thông tin!");
  } else {
    document.getElementById("myUL").insertAdjacentHTML("afterbegin", li);
  }
  document.getElementById("myInput").value = "";
}

const myUl = document.querySelector("#myUL");
myUl.addEventListener("click", (event) => {
  if (event.target.classList.contains("close")) {
    const liParent = event.target.parentElement;
    liParent.remove();
  }
  event.target.classList.toggle("checked");
});
