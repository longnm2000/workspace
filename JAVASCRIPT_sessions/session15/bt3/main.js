/**
 * Viết một đoạn mã cho phép người dùng nhập vào một số n. Tiến hành kiểm tra xem đó
có phải là một số nguyên hợp lệ hay không. Nếu đó là số hợp lệ, tiến hành tính tổng của
biểu thức C = 1 + ½ + ⅓ + … + 1/n
 */

let n = +prompt("Input n");
let result = 0;
if (n > 0 && Number.isInteger(n)) {
    for (let i = 1; i <= n; i++) {
        result += 1 / i;
    }
    alert(`C = ${result}`);
} else {
    alert("Invalid");
}