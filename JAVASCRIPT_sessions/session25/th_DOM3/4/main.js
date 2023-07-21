const toolTip = document.querySelector(".tooltip");
console.log(toolTip);

const toolTipText = document.querySelector(".tooltiptext");
console.log(toolTipText);
toolTip.addEventListener("mousemove", () => {
  toolTipText.setAttribute("style", "visibility: visible;");
});
toolTip.addEventListener("mouseout", () => {
  toolTipText.setAttribute("style", "visibility: none;");
});
