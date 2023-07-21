const boxList = document.querySelectorAll(".color-div");
const containerBox = document.getElementById("main");
for (let i = 0; i < boxList.length; i++) {
  boxList[i].addEventListener("mouseenter", (e) => {
    // containerBox.style.backgroundColor = getComputedStyle(
    //   boxList[i]
    // ).backgroundColor;
    containerBox.style.background = e.target.getAttribute("data-color");
  });
  boxList[i].addEventListener("mouseout", () => {
    containerBox.style.backgroundColor = "";
  });
}
