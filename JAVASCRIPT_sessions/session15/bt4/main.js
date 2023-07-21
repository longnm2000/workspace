/**
 * Viết một đoạn mã cho phép người dùng nhập vào một số n. Tiến hành kiểm tra xem đó
có phải là một số nguyên hợp lệ hay không. Nếu đó là số hợp lệ, tiến hành tính tổng của
biểu thức A = 1 x ½ + ½ x ⅓ + ⅓ x ¼ + … + 1/(n-1) x 1/n
 */

let n = +prompt("input n");
let result = 0;
if (n >= 2 && Number.isInteger(n)) {
    for (let i = 2; i <= n; i++) {
        result += 1 / (n - 1) * 1 / n;
    }
    alert("A = " + result);
} else {
    alert("Invalid");
}