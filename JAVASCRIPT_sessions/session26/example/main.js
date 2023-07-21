const childSelector = document.querySelector(".child");
const parentSelector = document.querySelector(".parent");

childSelector.addEventListener("click", () => {
  console.log("child clock");
});

parentSelector.addEventListener("click", () => {
  console.log("parent click");
});
