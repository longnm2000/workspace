/**
 * Viết một đoạn mã cho phép người dùng nhập vào một số nguyên dương n. Tiến hành
kiểm tra xem đó có phải là một số hợp lệ hay không. Nếu đó là số hợp lệ, tiến hành in ra
màn hình console các số chẵn trước, sau đó in ra các số lẻ sau
 */

let n = +prompt("input");
let chan = "";
let le = '';
if (n > 0 && Number.isInteger(n)) {
    for (let i = 0; i <= n; i++) {
        i % 2 == 0 ? chan += `${i} \n` : le += `${i} \n`;
    }
    alert(chan + le);
} else {
    alert("Invalid");
}