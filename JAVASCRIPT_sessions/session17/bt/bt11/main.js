let inputString = prompt("Nhập chuỗi").toLowerCase().split(" ");
console.log(inputString);
let longestString = inputString[0];
for (let i = 1; i < inputString.length; i++) {
  if (longestString.length < inputString[i].length) {
    longestString = inputString[i];
  }
}
alert(longestString);
