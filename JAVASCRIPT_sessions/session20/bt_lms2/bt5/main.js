let inputNumber = +prompt("Nhập số");
function giaiThua(n) {
  if (Number.isInteger(n) && n > 0) {
    if (n == 1) return 1;
    return n * giaiThua(n - 1);
  }
}
console.log(giaiThua(inputNumber));
