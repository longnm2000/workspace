/**
 * Viết 1 chương trình với đầu vào là 1 chuỗi ký tự và
 * in ra chuỗi đó với các ký tự đầu của chữ mỗi chữ được viết hoa.
 */
let str = prompt("Nhập chuỗi").toLowerCase().split(" ");
console.log(str);
let newStr = [];
for (let i = 0; i < str.length; i++) {
  newStr[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
}
alert(newStr.join(" "));
