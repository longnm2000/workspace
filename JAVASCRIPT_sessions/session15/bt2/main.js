/**
 * Viết một đoạn mã cho phép người dùng nhập vào một số n. Tiến hành kiểm tra xem đó
có phải là một số nguyên hợp lệ hay không. Nếu đó là số hợp lệ, tiến hành tính kết quả
của biểu thức B = 1 x 2 x 3 x … x n
 */

let n = +prompt("Input n");
let result = 1;
if (n > 0 && Number.isInteger(n)) {
    for (i = 1; i <= n; i++) {
        result *= i;
    }
    alert("B = " + result);
} else {
    alert("Invalid");
}