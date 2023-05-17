let a = prompt("Nhập chuỗi số").split(",");
function sortList(n) {
  n.sort((a, b) => {
    return a - b;
  });
  console.log(n.join(", "));
}
sortList(a);
