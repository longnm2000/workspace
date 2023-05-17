let number1 = +prompt("Nhập số thứ nhất");
let number2 = +prompt("Nhập số thứ 2");
function convert(a, b) {
  if (Number.isInteger(a) && Number.isInteger(b)) {
    let tg = a;
    a = b;
    b = tg;
    console.log(a);
    console.log(b);
  }
}
convert(number1, number2);
console.log(number1);
console.log(number1, number2);
