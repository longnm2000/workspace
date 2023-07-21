/**
 * Viết một đoạn mã JS cho người dùng nhập vào một chuỗi bất kỳ.
 * In ra chuỗi viết hoa toàn bộ ký tự đầu tiên của từng từ trong chuỗi đó.
 */

let inputString = prompt("Nhập chuỗi").toLowerCase().split(" ");
console.log(inputString);
let upperString = [];
for (let i = 0; i < inputString.length; i++) {
  upperString.push(
    inputString[i].replace(
      inputString[i].charAt(0),
      inputString[i].charAt(0).toUpperCase()
    )
  );
}
alert(upperString.join(" "));
