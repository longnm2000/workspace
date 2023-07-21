const list = document.querySelector("#list");
for (let i = 0; i < 3; i++) {
  list.insertAdjacentHTML("beforebegin", `<li>${i}</li>`);
}
