/**
 * Viết một đoạn mã cho phép người dùng nhập vào một số nguyên dương n. Tiến hành
kiểm tra xem đó có phải là một số hợp lệ hay không. Nếu đó là số hợp lệ, tiến hành in ra
màn hình console các số từ 0 — n theo dạng chẵn lẻ.
 */

let n = +prompt("input");
let result = '';
if (n > 0 &&Number.isInteger(n)) {
    for (let i = 0; i <= n; i++) {
        i%2==0? result += `${i} - chẵn \n` : result += `${i} - lẻ \n`;
    }
    console.log(result);
    alert(result);
} else {
    alert("Invalid");
}