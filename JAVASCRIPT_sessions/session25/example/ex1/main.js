const imageSelector = document.querySelectorAll(".container_image_nho img");
const imageTo = document.querySelector(".image-to img");

console.log(imageSelector);
for (let i = 0; i < imageSelector.length; i++) {
  const imageElementClick = imageSelector[i];
  imageElementClick.addEventListener("click", (event) => {
    const clicked = event.target;
    const srcClick = clicked.getAttribute("src");
    imageTo.setAttribute("src", srcClick);
  });
}
