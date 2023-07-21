/**
 * Viết một đoạn mã cho phép người dùng nhập vào một số n. Tiến hành kiểm tra xem đó
có phải là một số hợp lệ hay không. Nếu đó là số hợp lệ, tiến hành in ra bảng cửu
chương của số đó từ 1 — 10
 */

let n = +prompt("input");
let result = '';
if (Number.isInteger(n) && n >= 0) {
    for (let i = 1; i <= 10; i++) {
        result += `${n} * ${i} = ${n * i} \n`;
    }
    console.log(result);
    alert(result);
} else {
    alert("Invalid");
}