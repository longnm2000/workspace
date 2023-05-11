/**
 * Viết một đoạn mã cho phép người dùng nhập vào một số nguyên dương n. Tiến hành
kiểm tra xem đó có phải là một số hợp lệ hay không. Nếu đó là số hợp lệ, tiến hành in ra
màn hình console
 */

let n = +prompt("input");
let result = '';
if (n > 0 && Number.isInteger(n)) {
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= i; j++) {
            result += "*  ";
        }
        result += '\n';
    }
    alert(result);
} else {
    alert("Invalid");
}