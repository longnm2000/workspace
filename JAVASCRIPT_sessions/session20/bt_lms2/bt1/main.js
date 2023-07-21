let a = +prompt("Nhập số thứ nhất");
let b = +prompt("Nhập số thứ 2");
let c = +prompt("Nhập số thứ 3");
function minNumber(a, b, c) {
  let min = a;
  if (min > b) min = b;
  if (min > c) min = c;
  return min;
}
console.log(minNumber(a, b, c));
