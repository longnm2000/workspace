let numberList = prompt(
  "Nhập vào chuỗi các chữ số cách nhau bới dấu ','"
).split(",");
let newNumberList = numberList.map((item) => +item);
console.log(newNumberList);
let n = +prompt("Nhập số cần so sánh");

function hasEvenNumberGreaterThanN(numberList, n) {
  for (let item of numberList) {
    if (item > n && item % 2 === 0) {
      return true;
    }
  }
  return false;
}

console.log(hasEvenNumberGreaterThanN(numberList, n));
