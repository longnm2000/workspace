//Cho 1 chuỗi str. Viết chương trình đảo ngược chuỗi và in ra kết quả.
let str = prompt("Nhập chuỗi");
let reverseStr = "";
for (let i = str.length - 1; i >= 0; i--) {
  reverseStr += str.charAt(i);
}
alert(reverseStr);
